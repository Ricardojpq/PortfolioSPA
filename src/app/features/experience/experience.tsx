import {Box, Container, Typography} from "@mui/material"
import {useTheme} from "@/app/core/hooks/use-theme"
import JobCard from "@/app/features/experience/components/job-card"

interface ExperienceSectionProps {
    dictionary: any
}

export default function ExperienceSection({dictionary}: ExperienceSectionProps) {
    const {theme} = useTheme()

    const jobs = [
        {
            title: dictionary.experience.job1.title,
            company: dictionary.experience.job1.company,
            period: dictionary.experience.job1.period,
            description: dictionary.experience.job1.description,
            technologies: [  "JavaScript (ES6+)",
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
                "Tailwind CSS",],
        }
    ]

    return (
        <section id="experience" className="section-transition">
            <Box
                sx={{
                    py: 10,
                    minHeight: "100vh",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Container>
                    <Box sx={{mb: 6}}>
                        <Typography
                            variant="h2"
                            sx={{
                                fontSize: {xs: "1.75rem", sm: "2rem", md: "2.5rem"},
                                fontWeight: 700,
                                mb: 4,
                                display: "flex",
                                alignItems: "center",
                                "&::after": {
                                    content: '""',
                                    display: "block",
                                    width: {xs: "30%", sm: "40%"},
                                    height: "1px",
                                    bgcolor: theme === "dark" ? "rgba(136, 146, 176, 0.3)" : "rgba(100, 116, 139, 0.3)",
                                    ml: 3,
                                },
                            }}
                        >
                            {dictionary.experience.title}
                        </Typography>
                    </Box>

                    <Box sx={{maxWidth: 900, mx: "auto"}}>
                        {jobs.map((job, index) => (
                            <JobCard key={index} job={job} index={index} theme={theme}/>
                        ))}
                    </Box>
                </Container>
            </Box>
        </section>
    )
}
