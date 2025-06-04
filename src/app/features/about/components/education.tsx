

import { Box, Typography, Paper } from "@mui/material"
import { School, Code } from "@mui/icons-material"
import { motion } from "framer-motion"
import { useTheme } from "@/app/core/hooks/use-theme"

interface EducationProps {
    dictionary: any
}

export default function Education({ dictionary }: EducationProps) {
    const { theme } = useTheme()

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
        >
            <Paper
                elevation={4}
                sx={{
                    p: 4,
                    borderRadius: 4,
                    bgcolor: theme === "dark" ? "rgba(17, 34, 64, 0.6)" : "rgba(255, 255, 255, 0.8)",
                }}
            >
                <Typography variant="h6" sx={{ mb: 3, fontWeight: 600, color: "primary.main" }}>
                    {dictionary.about.education}
                </Typography>

                <Box sx={{ mb: 4 }}>
                    <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
                        <School sx={{ mr: 1.5, color: "primary.main" }} />
                        <Box>
                            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                {dictionary.about.degree}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {dictionary.about.university}
                            </Typography>
                        </Box>
                    </Box>

                    <Typography variant="body2" sx={{ pl: 5 }}>
                        {dictionary.about.specialization}
                    </Typography>
                </Box>

                <Typography variant="h6" sx={{ mb: 3, fontWeight: 600, color: "primary.main" }}>
                    {dictionary.about.certifications}
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Code sx={{ mr: 1.5, color: "primary.main" }} />
                        <Typography variant="subtitle2">ReactJS desde Cero! Hooks, Redux, Context, Firebase y más! 19HRS(S/C) • Udemy, Inc</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Code sx={{ mr: 1.5, color: "primary.main" }} />
                        <Typography variant="subtitle2">Angular desde cero a experto: Crear una aplicación real 17HRS(S/C) • Udemy, Inc</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Code sx={{ mr: 1.5, color: "primary.main" }} />
                        <Typography variant="subtitle2">ASP.NET MVC en C# desde cero SQL Server full stack 18HRS(S/C) • Udemy, Inc</Typography>
                    </Box>
                </Box>
            </Paper>
        </motion.div>
    )
}
