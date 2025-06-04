import {Box, Container, Typography, Grid} from "@mui/material"
import {useTheme} from "@/app/core/hooks/use-theme"
import ProjectCard from "@/app/features/projects/components/project-card"
import {GitHub} from "@mui/icons-material"
import lotteryApp from "@/assets/img/photos/lotteryApp.png"

interface ProjectsSectionProps {
    dictionary: any
}

export default function ProjectsSection({dictionary}: ProjectsSectionProps) {
    const {theme} = useTheme()

    const projects = [
        {
            title: dictionary.projects.project0.title,
            description: dictionary.projects.project0.description,
            image: lotteryApp,
            technologies: ["C#","Typescript","Angular", ".NET", "MongoDB", "Sql Server", "Micro services"],
            links: {
                github: "https://github.com/Ricardojpq/Multitenancy-app",
                live: "/",
            },
        },
    ]

    return (
        <section id="projects" className="section-transition">
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
                            {dictionary.projects.title}
                        </Typography>
                    </Box>

                    <Grid container spacing={4}>
                        {projects.map((project, index) => (
                            <Grid size={{xs: 12, sm: 6}} key={index}>
                                <ProjectCard project={project} index={index} dictionary={dictionary}/>
                            </Grid>
                        ))}
                    </Grid>

                    <Box sx={{textAlign: "center", mt: 6}}>
                        <Typography variant="h6" sx={{mb: 3}}>
                            {dictionary.projects.moreProjects}
                        </Typography>

                        <a href="https://github.com/Ricardojpq" target="_blank" rel="noopener noreferrer"
                           style={{textDecoration: "none"}}>
                            <Box
                                sx={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    color: "primary.main",
                                    textDecoration: "none",
                                    border: "1px solid",
                                    borderColor: "primary.main",
                                    borderRadius: 2,
                                    px: 3,
                                    py: 1,
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        bgcolor: theme === "dark" ? "rgba(226, 165, 76, 0.1)" : "rgba(217, 119, 6, 0.1)",
                                        transform: "translateY(-3px)",
                                    },
                                }}
                            >
                                <GitHub sx={{mr: 1}}/>
                                {dictionary.projects.viewRepo}
                            </Box>
                        </a>
                    </Box>
                </Container>
            </Box>
        </section>
    )
}
