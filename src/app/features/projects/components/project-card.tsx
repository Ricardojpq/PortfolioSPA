"use client"

import { Box, Typography, Card, CardContent, Chip } from "@mui/material"
import { GitHub } from "@mui/icons-material"
import { motion } from "framer-motion"
import { useTheme } from "@/app/core/hooks/use-theme"

interface ProjectCardProps {
    project: {
        title: string
        description: string
        image: any
        technologies: string[]
        links: {
            github: string
            live: string
        }
    }
    index: number
    dictionary: any
}

export default function ProjectCard({ project, index, dictionary }: ProjectCardProps) {
    const { theme } = useTheme()

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
        >
            <Card
                sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 4,
                    overflow: "hidden",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                        transform: "translateY(-10px)",
                        boxShadow: `0 10px 30px ${theme === "dark" ? "rgba(255, 157, 0, 0.3)" : "rgba(255, 123, 0, 0.3)"}`,
                    },
                }}
                className="glow-effect"
            >
                <Box
                    sx={{
                        position: "relative",
                        paddingTop: "56.25%", // 16:9 aspect ratio
                        overflow: "hidden",
                    }}
                >
                    <Box
                        component="img"
                        src={project.image}
                        alt={project.title}
                        sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            transition: "transform 0.5s ease",
                            "&:hover": {
                                transform: "scale(1.05)",
                            },
                        }}
                    />
                </Box>

                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
                        {project.title}
                    </Typography>

                    <Typography variant="body2" sx={{ mb: 3 }}>
                        {project.description}
                    </Typography>

                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
                        {project.technologies.map((tech) => (
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

                    <Box sx={{ display: "flex", gap: 2 }}>
                        <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                color: theme === "dark" ? "#8892b0" : "#64748b",
                                textDecoration: "none",
                            }}
                        >
                            <GitHub sx={{ mr: 0.5, fontSize: 20 }} />
                            {dictionary.projects.code}
                        </a>

                        <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                color: theme === "dark" ? "#8892b0" : "#64748b",
                                textDecoration: "none",
                            }}
                        >
                            <Box component="span" sx={{ mr: 0.5, fontSize: 20 }}>
                                🔗
                            </Box>
                            {dictionary.projects.demo}
                        </a>
                    </Box>
                </CardContent>
            </Card>
        </motion.div>
    )
}
