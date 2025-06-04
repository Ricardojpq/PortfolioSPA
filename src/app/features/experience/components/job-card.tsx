import { Box, Typography, Paper, Chip } from "@mui/material"
import { motion } from "framer-motion"

interface JobCardProps {
    job: {
        title: string
        company: string
        period: string
        description: string[]
        technologies: string[]
    }
    index: number
    theme: string
}

export default function JobCard({ job, index, theme }: JobCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
        >
            <Paper
                elevation={2}
                sx={{
                    p: 4,
                    mb: 4,
                    borderRadius: 4,
                    borderLeft: "4px solid",
                    borderColor: "primary.main",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                        transform: "translateY(-5px)",
                    },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        justifyContent: "space-between",
                        mb: 2,
                    }}
                >
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {job.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: { xs: 1, sm: 0 } }}>
                        {job.period}
                    </Typography>
                </Box>

                <Typography variant="subtitle1" sx={{ color: "primary.main", mb: 2 }}>
                    {job.company}
                </Typography>

                <Box component="ul" sx={{ pl: 2, mb: 3 }}>
                    {job.description.map((item, i) => (
                        <Box component="li" key={i} sx={{ mb: 1 }}>
                            <Typography variant="body2">{item}</Typography>
                        </Box>
                    ))}
                </Box>

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {job.technologies.map((tech) => (
                        <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                                bgcolor: theme === "dark" ? "rgba(17, 34, 64, 0.8)" : "rgba(241, 245, 249, 0.8)",
                                color: "text.primary",
                            }}
                        />
                    ))}
                </Box>
            </Paper>
        </motion.div>
    )
}
