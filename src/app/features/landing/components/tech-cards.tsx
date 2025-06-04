import { Box, Typography } from "@mui/material"
import { motion } from "framer-motion"
import { Code, Laptop, Rocket } from "@mui/icons-material"

interface TechCardsProps {
    dictionary: any
    onSectionClick: (section: string) => void
}

export default function TechCards({ dictionary, onSectionClick }: TechCardsProps) {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", gap: 3, flexWrap: "wrap", mb: 6 }}>
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <Box
                    onClick={() => onSectionClick("projects")}
                    sx={{
                        p: 3,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        background: "rgba(17, 34, 64, 0.6)",
                        backdropFilter: "blur(10px)",
                        borderRadius: 4,
                        width: { xs: "100%", sm: "180px" },
                        height: "180px",
                        justifyContent: "center",
                        transition: "transform 0.3s, box-shadow 0.3s",
                        "&:hover": {
                            transform: "translateY(-10px)",
                            boxShadow: "0 10px 30px rgba(255, 157, 0, 0.3)",
                            cursor: "pointer",
                        },
                    }}
                    className="glow-effect"
                >
                    <Code sx={{ fontSize: 50, color: "#e2a54c", mb: 2 }} />
                    <Typography variant="h6">{dictionary.landing.frontend}</Typography>
                </Box>
            </motion.div>

            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
            >
                <Box
                    onClick={() => onSectionClick("projects")}
                    sx={{
                        p: 3,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        background: "rgba(17, 34, 64, 0.6)",
                        backdropFilter: "blur(10px)",
                        borderRadius: 4,
                        width: { xs: "100%", sm: "180px" },
                        height: "180px",
                        justifyContent: "center",
                        transition: "transform 0.3s, box-shadow 0.3s",
                        "&:hover": {
                            transform: "translateY(-10px)",
                            boxShadow: "0 10px 30px rgba(255, 157, 0, 0.3)",
                            cursor: "pointer",
                        },
                    }}
                    className="glow-effect"
                >
                    <Laptop sx={{ fontSize: 50, color: "#64b5f6", mb: 2 }} />
                    <Typography variant="h6">{dictionary.landing.backend}</Typography>
                </Box>
            </motion.div>

            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
            >
                <Box
                    onClick={() => onSectionClick("projects")}
                    sx={{
                        p: 3,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        background: "rgba(17, 34, 64, 0.6)",
                        backdropFilter: "blur(10px)",
                        borderRadius: 4,
                        width: { xs: "100%", sm: "180px" },
                        height: "180px",
                        justifyContent: "center",
                        transition: "transform 0.3s, box-shadow 0.3s",
                        "&:hover": {
                            transform: "translateY(-10px)",
                            boxShadow: "0 10px 30px rgba(255, 157, 0, 0.3)",
                            cursor: "pointer",
                        },
                    }}
                    className="glow-effect"
                >
                    <Rocket sx={{ fontSize: 50, color: "#8892b0", mb: 2 }} />
                    <Typography variant="h6">{dictionary.landing.devops}</Typography>
                </Box>
            </motion.div>
        </Box>
    )
}
