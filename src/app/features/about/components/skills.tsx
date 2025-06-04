import { Typography, Grid, Chip } from "@mui/material"
import { useTheme } from "@mui/material/styles"

interface SkillsProps {
    dictionary: any
}

export default function Skills({ dictionary }: SkillsProps) {
    const { palette } = useTheme()

    return (
        <>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                {dictionary.about.recentTech}
            </Typography>

            <Grid container spacing={1} sx={{ mb: 4 }} >
                {[
                    "JavaScript (ES6+)",
                    "TypeScript",
                    "C#",
                    "React",
                    "Angular",
                    ".NET",
                    "Node.js",
                    "Express js",
                    "MongoDB",
                    "MS Sql Server",
                    "Entity Framework Core",
                    "PostgreSQL",
                    "Material UI",
                    "Tailwind CSS",
                ].map((tech) => (
                    <Grid key={tech} className="hover:accent-red-600">
                        <Chip
                            label={tech}
                            sx={{
                                bgcolor: palette.mode === "dark" ? "rgba(17, 34, 64, 0.8)" : "rgba(241, 245, 249, 0.8)",
                                color: "text.primary",
                                fontWeight: 500,
                                mb: 1,

                            }}
                            
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
