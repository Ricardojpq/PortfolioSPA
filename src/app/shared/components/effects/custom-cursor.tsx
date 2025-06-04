import { useEffect, useState, useRef } from "react"
import { useTheme } from "@/app/core/hooks/use-theme"

export default function CustomCursor() {
    const glowRef = useRef<HTMLDivElement>(null)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isVisible, setIsVisible] = useState(false)
    const { theme } = useTheme()

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY })
            if (!isVisible) setIsVisible(true)

            // Highlight elements near the cursor
            const elements = document.elementsFromPoint(e.clientX, e.clientY)
            elements.forEach((el) => {
                if (
                    el.tagName === "BUTTON" ||
                    el.tagName === "A" ||
                    el.classList.contains("glow-effect") ||
                    el.classList.contains("highlight-on-hover")
                ) {
                    el.classList.add("cursor-highlight")
                }
            })
        }

        const handleMouseLeave = () => setIsVisible(false)
        const handleMouseEnter = () => setIsVisible(true)

        // Remove highlight when cursor moves away
        const removeHighlights = () => {
            document.querySelectorAll(".cursor-highlight").forEach((el) => {
                el.classList.remove("cursor-highlight")
            })
        }

        document.addEventListener("mousemove", handleMouseMove)
        document.addEventListener("mouseleave", handleMouseLeave)
        document.addEventListener("mouseenter", handleMouseEnter)
        document.addEventListener("mousemove", removeHighlights)

        return () => {
            document.removeEventListener("mousemove", handleMouseMove)
            document.removeEventListener("mouseleave", handleMouseLeave)
            document.removeEventListener("mouseenter", handleMouseEnter)
            document.removeEventListener("mousemove", removeHighlights)
        }
    }, [isVisible])

    // Hide on mobile devices
    if (typeof window !== "undefined" && window.innerWidth < 768) {
        return null
    }

    const glowColor =
        theme === "dark"
            ? "radial-gradient(circle, rgba(255, 157, 0, 0.15) 0%, rgba(255, 157, 0, 0.05) 40%, rgba(255, 157, 0, 0) 70%)"
            : "radial-gradient(circle, rgba(255, 123, 0, 0.15) 0%, rgba(255, 123, 0, 0.05) 40%, rgba(255, 123, 0, 0) 70%)"

    return (
        <>
            {/* Large glow effect */}
            <div
                ref={glowRef}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "300px",
                    height: "300px",
                    borderRadius: "50%",
                    background: glowColor,
                    transform: `translate(${position.x - 150}px, ${position.y - 150}px)`,
                    pointerEvents: "none",
                    zIndex: 9998,
                    opacity: isVisible ? 1 : 0,
                    transition: "opacity 0.3s ease",
                }}
            />
        </>
    )
}
