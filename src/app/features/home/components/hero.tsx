

import { Box, Typography } from "@mui/material"
import { motion } from "framer-motion"
import { useTheme } from "@/app/core/hooks/use-theme"

interface HeroProps {
    dictionary: any
    onNavClick: (sectionId: string) => void
}

export default function Hero({ dictionary, onNavClick }: HeroProps) {
    const { theme } = useTheme()

    return (
        <Box sx={{ mb: 6 }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Typography
                    variant="subtitle1"
                    sx={{
                        color: "primary.main",
                        mb: 2,
                        fontWeight: 500,
                        fontSize: "1.1rem",
                    }}
                >
                    {dictionary.home.greeting}
                </Typography>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
                        fontWeight: 700,
                        mb: 1,
                        lineHeight: 1.1,
                    }}
                    className="gradient-text"
                >
                    {dictionary.myInfo.fullName}
                </Typography>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
                        fontWeight: 700,
                        color: "text.secondary",
                        mb: 3,
                        lineHeight: 1.1,
                    }}
                >
                    {dictionary.home.role}
                </Typography>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: "1.1rem",
                        color: "text.secondary",
                        maxWidth: "600px",
                        mb: 4,
                    }}
                >
                    {dictionary.home.description}
                </Typography>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                    <Box
                        component="button"
                        onClick={() => onNavClick("projects")}
                        className="glow-effect"
                        sx={{
                            bgcolor: "primary.main",
                            color: theme === "dark" ? "#0a192f" : "white",
                            border: "none",
                            borderRadius: 2,
                            px: 4,
                            py: 1.5,
                            fontSize: "1rem",
                            fontWeight: 500,
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            "&:hover": {
                                bgcolor: theme === "dark" ? "#ff7b00" : "#e65c00",
                                transform: "translateY(-3px)",
                            },
                        }}
                    >
                        {dictionary.home.viewProjects}
                    </Box>

                    <Box
                        component="button"
                        onClick={() => onNavClick("contact")}
                        sx={{
                            bgcolor: "transparent",
                            color: "primary.main",
                            border: "1px solid",
                            borderColor: "primary.main",
                            borderRadius: 2,
                            px: 4,
                            py: 1.5,
                            fontSize: "1rem",
                            fontWeight: 500,
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            "&:hover": {
                                bgcolor: theme === "dark" ? "rgba(226, 165, 76, 0.1)" : "rgba(217, 119, 6, 0.1)",
                                transform: "translateY(-3px)",
                            },
                        }}
                    >
                        {dictionary.home.contactMe}
                    </Box>
                </Box>
            </motion.div>
        </Box>
    )
}
