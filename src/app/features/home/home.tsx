import {Box, Container, Grid, Avatar} from "@mui/material"
import {motion} from "framer-motion"
import Hero from "@/app/features/home/components/hero"
import photo from "@/assets/img/photos/yo.jpg"

interface HomeSectionProps {
    dictionary: any
    lang: string
}

export default function HomeSection({dictionary}: HomeSectionProps) {
    const handleNavClick = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({behavior: "smooth"})
        }
    }

    return (
        <section id="home" className="section-transition">
            <Box
                sx={{
                    minHeight: "100vh",
                    display: "flex",
                    alignItems: "center",
                    py: 8,
                }}
            >
                <Container>
                    <Grid container spacing={4} alignItems="center">
                        <Grid size={{xs: 12, md: 7}}>
                            <Hero dictionary={dictionary} onNavClick={handleNavClick}/>
                        </Grid>

                        <Grid size={{xs: 12, md: 5}} sx={{display: "flex", justifyContent: "center"}}>
                            <motion.div
                                initial={{opacity: 0, scale: 0.8}}
                                animate={{opacity: 1, scale: 1}}
                                transition={{duration: 0.5, delay: 0.5}}
                            >
                                <Box
                                    sx={{
                                        position: "relative",
                                        width: {xs: "250px", sm: "300px"},
                                        height: {xs: "250px", sm: "300px"},
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: "100%",
                                            height: "100%",
                                            borderRadius: "20px",
                                            overflow: "hidden",
                                            position: "relative",
                                            "&::before": {
                                                content: '""',
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                width: "100%",
                                                height: "100%",
                                                opacity: 0.2,
                                                zIndex: 1,
                                            },
                                        }}
                                    >
                                        <Avatar
                                            src={photo}
                                            alt="Tu Nombre"
                                            sx={{
                                                width: "100%",
                                                height: "100%",
                                                borderRadius: "20px",
                                            }}
                                            children='RJ'
                                        />
                                    </Box>

                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: 15,
                                            left: 15,
                                            width: "100%",
                                            height: "100%",
                                            border: "2px solid",
                                            borderColor: "primary.main",
                                            borderRadius: "20px",
                                            zIndex: -1,
                                        }}
                                    />
                                </Box>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </section>
    )
}
