import { Box, Grid, Typography, Paper } from "@mui/material"
import { motion } from "framer-motion"
import { useTheme } from "@/app/core/hooks/use-theme"

interface ContactFormProps {
    dictionary: any
}

export default function ContactForm({ dictionary }: ContactFormProps) {
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
                    maxWidth: 600,
                    mx: "auto",
                }}
            >
                <Box component="form" sx={{ display: "grid", gap: 3 }}>
                    <Grid container spacing={2}>
                        <Grid size={{xs:12,sm:6}}>
                            <Typography variant="subtitle2" sx={{ mb: 1 }}>
                                {dictionary.contact.name}
                            </Typography>
                            <Box
                                component="input"
                                type="text"
                                placeholder={dictionary.contact.name}
                                sx={{
                                    width: "100%",
                                    p: 1.5,
                                    borderRadius: 2,
                                    border: "1px solid",
                                    borderColor: theme === "dark" ? "rgba(136, 146, 176, 0.3)" : "rgba(100, 116, 139, 0.3)",
                                    bgcolor: "transparent",
                                    color: "text.primary",
                                    fontSize: "1rem",
                                    "&:focus": {
                                        outline: "none",
                                        borderColor: "primary.main",
                                    },
                                }}
                            />
                        </Grid>

                        <Grid size={{xs:12,sm:6}}>
                            <Typography variant="subtitle2" sx={{ mb: 1 }}>
                                {dictionary.contact.email}
                            </Typography>
                            <Box
                                component="input"
                                type="email"
                                placeholder="tu@email.com"
                                sx={{
                                    width: "100%",
                                    p: 1.5,
                                    borderRadius: 2,
                                    border: "1px solid",
                                    borderColor: theme === "dark" ? "rgba(136, 146, 176, 0.3)" : "rgba(100, 116, 139, 0.3)",
                                    bgcolor: "transparent",
                                    color: "text.primary",
                                    fontSize: "1rem",
                                    "&:focus": {
                                        outline: "none",
                                        borderColor: "primary.main",
                                    },
                                }}
                            />
                        </Grid>
                    </Grid>

                    <Box>
                        <Typography variant="subtitle2" sx={{ mb: 1 }}>
                            {dictionary.contact.subject}
                        </Typography>
                        <Box
                            component="input"
                            type="text"
                            placeholder={dictionary.contact.subject}
                            sx={{
                                width: "100%",
                                p: 1.5,
                                borderRadius: 2,
                                border: "1px solid",
                                borderColor: theme === "dark" ? "rgba(136, 146, 176, 0.3)" : "rgba(100, 116, 139, 0.3)",
                                bgcolor: "transparent",
                                color: "text.primary",
                                fontSize: "1rem",
                                "&:focus": {
                                    outline: "none",
                                    borderColor: "primary.main",
                                },
                            }}
                        />
                    </Box>

                    <Box>
                        <Typography variant="subtitle2" sx={{ mb: 1 }}>
                            {dictionary.contact.message}
                        </Typography>
                        <Box
                            component="textarea"
                            placeholder={dictionary.contact.message}
                            rows={5}
                            sx={{
                                width: "100%",
                                p: 1.5,
                                borderRadius: 2,
                                border: "1px solid",
                                borderColor: theme === "dark" ? "rgba(136, 146, 176, 0.3)" : "rgba(100, 116, 139, 0.3)",
                                bgcolor: "transparent",
                                color: "text.primary",
                                fontSize: "1rem",
                                resize: "vertical",
                                fontFamily: "inherit",
                                "&:focus": {
                                    outline: "none",
                                    borderColor: "primary.main",
                                },
                            }}
                        />
                    </Box>

                    <Box
                        component="button"
                        type="submit"
                        sx={{
                            bgcolor: "primary.main",
                            color: theme === "dark" ? "#0a192f" : "white",
                            border: "none",
                            borderRadius: 2,
                            px: 4,
                            py: 1.5,
                            fontSize: "1rem",
                            fontWeight: 500,
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            "&:hover": {
                                bgcolor: theme === "dark" ? "#d97706" : "#b45309",
                                transform: "translateY(-3px)",
                            },
                        }}
                    >
                        {dictionary.contact.sendButton}
                    </Box>
                </Box>
            </Paper>
        </motion.div>
    )
}
