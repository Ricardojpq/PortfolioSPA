import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Box, Typography, Button, Container } from "@mui/material"
import LanguageSwitcher from "@/app/layout/components/header/language-switcher"
import TechCards from "@/app/features/landing/components/tech-cards"

interface LandingPageProps {
    onEnter: () => void
    dictionary: any
    lang: string
}

export default function LandingPage({ onEnter, dictionary, lang }: LandingPageProps) {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setLoaded(true)
    }, [])

    // Función para manejar la navegación a secciones
    const handleSectionClick = (section: string) => {
        // Primero entramos al sitio principal
        onEnter()

        // Luego, después de un breve retraso para permitir la transición,
        // navegamos a la sección correspondiente
        setTimeout(() => {
            const element = document.getElementById(section)
            if (element) {
                element.scrollIntoView({ behavior: "smooth" })
            }
        }, 100)
    }

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                background: "linear-gradient(135deg, #0a192f 0%, #112240 50%, #1a365d 100%)",
                color: "#e6f1ff",
                overflow: "hidden",
                position: "relative",
            }}
        >
            {/* Language Switcher */}
            <Box sx={{ position: "absolute", top: 20, right: 20, zIndex: 10 }}>
                <LanguageSwitcher lang={lang} dictionary={dictionary} />
            </Box>

            {/* Animated background elements */}
            {loaded && (
                <>
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{
                                x: Math.random() * window.innerWidth,
                                y: Math.random() * window.innerHeight,
                                opacity: 0,
                            }}
                            animate={{
                                x: Math.random() * window.innerWidth,
                                y: Math.random() * window.innerHeight,
                                opacity: [0.1, 0.3, 0.1],
                                scale: [1, 1.5, 1],
                            }}
                            transition={{
                                duration: Math.random() * 10 + 10,
                                repeat: Number.POSITIVE_INFINITY,
                                repeatType: "reverse",
                            }}
                            style={{
                                position: "absolute",
                                width: Math.random() * 20 + 5,
                                height: Math.random() * 20 + 5,
                                borderRadius: "50%",
                                background: i % 3 === 0 ? "#e2a54c" : i % 3 === 1 ? "#64b5f6" : "#8892b0",
                                filter: "blur(3px)",
                            }}
                        />
                    ))}
                </>
            )}

            <Container maxWidth="md" sx={{ zIndex: 1, textAlign: "center" }}>
                <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
                    <Typography
                        variant="h1"
                        component="h1"
                        className="gradient-text"
                        sx={{ mb: 2, fontSize: { xs: "2.5rem", md: "4rem" }, fontWeight: 700 }}
                    >
                        {dictionary.landing.greeting}
                    </Typography>
                </motion.div>

                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Typography variant="h4" component="h2" sx={{ mb: 4, color: "#8892b0" }}>
                        {dictionary.landing.welcome}
                    </Typography>
                </motion.div>

                <TechCards dictionary={dictionary} onSectionClick={handleSectionClick} />

                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                >
                    <Button
                        variant="contained"
                        size="large"
                        onClick={onEnter}
                        sx={{
                            px: 4,
                            py: 1.5,
                            fontSize: "1.1rem",
                            background: "linear-gradient(45deg, #e2a54c 30%, #d97706 90%)",
                            "&:hover": {
                                background: "linear-gradient(45deg, #d97706 30%, #b45309 90%)",
                            },
                        }}
                    >
                        {dictionary.landing.exploreButton}
                    </Button>
                </motion.div>
            </Container>
        </Box>
    )
}
