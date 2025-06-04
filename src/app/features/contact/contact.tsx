import {Box, Container, Typography} from "@mui/material"
import {motion} from "framer-motion"
import ContactForm from "@/app/features/contact/components/contact-form"
import ContactLinks from "@/app/features/contact/components/contact-links"

interface ContactSectionProps {
    dictionary: any
}

export default function ContactSection({dictionary}: ContactSectionProps) {
    return (
        <section id="contact" className="section-transition">
            <Box
                sx={{
                    py: 10,
                    minHeight: "80vh",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Container maxWidth="md">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                        viewport={{once: true}}
                    >
                        <Box sx={{textAlign: "center", mb: 6}}>
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    color: "primary.main",
                                    mb: 2,
                                    fontWeight: 500,
                                }}
                            >
                                {dictionary.contact.whatsNext}
                            </Typography>

                            <Typography
                                variant="h2"
                                sx={{
                                    fontSize: {xs: "1.75rem", sm: "2rem", md: "2.5rem"},
                                    fontWeight: 700,
                                    mb: 3,
                                }}
                            >
                                {dictionary.contact.title}
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    maxWidth: 600,
                                    mx: "auto",
                                    mb: 5,
                                    color: "text.secondary",
                                }}
                            >
                                {dictionary.contact.description}
                            </Typography>
                        </Box>
                    </motion.div>

                    <ContactForm dictionary={dictionary}/>
                    <ContactLinks dictionary={dictionary}/>
                </Container>
            </Box>
        </section>
    )
}
