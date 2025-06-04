import { useEffect, useState, useRef } from "react"
import { useTheme } from "@/app/core/hooks/use-theme"

export default function ColorParticles() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const { theme } = useTheme()
    const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 })

    useEffect(() => {
        const updateCanvasSize = () => {
            setCanvasSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }

        updateCanvasSize()
        window.addEventListener("resize", updateCanvasSize)

        return () => {
            window.removeEventListener("resize", updateCanvasSize)
        }
    }, [])

    useEffect(() => {
        if (!canvasRef.current || canvasSize.width === 0 || canvasSize.height === 0) return

        const canvas = canvasRef.current
        const ctx = canvas.getContext("2d")
        if (!ctx) return

        canvas.width = canvasSize.width
        canvas.height = canvasSize.height

        // Define colors based on theme
        const colors =
            theme === "dark"
                ? ["#ff9d00", "#00b8ff", "#ff3d71", "#00c896", "#a346ff"]
                : ["#ff7b00", "#0084ff", "#e91e63", "#00a876", "#8e24aa"]

        // Particle class
        class Particle {
            x: number
            y: number
            size: number
            color: string
            speedX: number
            speedY: number
            alpha: number
            alphaSpeed: number

            constructor() {
                this.x = Math.random() * canvas.width
                this.y = Math.random() * canvas.height
                this.size = Math.random() * 5 + 1
                this.color = colors[Math.floor(Math.random() * colors.length)]
                this.speedX = Math.random() * 0.5 - 0.25
                this.speedY = Math.random() * 0.5 - 0.25
                this.alpha = 0
                this.alphaSpeed = 0.01
            }

            update() {
                this.x += this.speedX
                this.y += this.speedY

                // Fade in and out
                if (this.alpha < 0.4) {
                    this.alpha += this.alphaSpeed
                } else {
                    this.alpha -= this.alphaSpeed
                }

                // Reset if out of bounds or faded out
                if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height || this.alpha <= 0) {
                    this.x = Math.random() * canvas.width
                    this.y = Math.random() * canvas.height
                    this.alpha = 0
                }
            }

            draw() {
                ctx?.beginPath()
                ctx?.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx!.fillStyle = this.color
                ctx!.globalAlpha = this.alpha
                ctx?.fill()
                ctx!.globalAlpha = 1
            }
        }

        // Create particles
        const particlesArray: Particle[] = []
        const numberOfParticles = 20

        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle())
        }

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update()
                particlesArray[i].draw()
            }

            requestAnimationFrame(animate)
        }

        animate()

        return () => {
            // Cleanup
        }
    }, [canvasSize, theme])

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                zIndex: 0,
            }}
        />
    )
}
