import {Box, Container, Grid, Typography} from "@mui/material"
import {useTheme} from "@/app/core/hooks/use-theme"
import Bio from "@/app/features/about/components/bio"
import Skills from "@/app/features/about/components/skills"
import Education from "@/app/features/about/components/education"

interface AboutSectionProps {
    dictionary: any
}

export default function AboutSection({dictionary}: AboutSectionProps) {
    const {theme} = useTheme()

    return (
        <section id="about" className="section-transition">
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
                            {dictionary.about.title}
                        </Typography>
                    </Box>

                    <Grid container spacing={6}>
                        <Grid size={{xs: 12, md: 6}}>
                            <Bio dictionary={dictionary}/>
                            <Skills dictionary={dictionary}/>
                        </Grid>

                        <Grid size={{xs: 12, md: 6}}>
                            <Education dictionary={dictionary}/>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </section>
    )
}
