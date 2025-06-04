import { Box, Container, Typography, IconButton } from "@mui/material"
import { GitHub, LinkedIn } from "@mui/icons-material"
import { useTheme } from "@/app/core/hooks/use-theme"

interface FooterProps {
    dictionary: any
}

export default function Footer({ dictionary }: FooterProps) {
    const { theme } = useTheme()

    return (
        <Box
            component="footer"
            sx={{
                py: 4,
                textAlign: "center",
                borderTop: "1px solid",
                borderColor: theme === "dark" ? "rgba(136, 146, 176, 0.2)" : "rgba(100, 116, 139, 0.2)",
            }}
        >
            <Container>
                <Box sx={{ display: "flex", justifyContent: "center", gap: 3, mb: 2 }}>
                    <IconButton
                        color="inherit"
                        component="a"
                        href="https://github.com/Ricardojpq"
                        target="_blank"
                        sx={{
                            "&:hover": {
                                color: "primary.main",
                            },
                        }}
                    >
                        <GitHub />
                    </IconButton>

                    <IconButton
                        color="inherit"
                        component="a"
                        href="https://linkedin.com/in/ricardojpq"
                        target="_blank"
                        sx={{
                            "&:hover": {
                                color: "primary.main",
                            },
                        }}
                    >
                        <LinkedIn />
                    </IconButton>
                    
                </Box>

                <Typography variant="body2" color="text.secondary">
                    {dictionary.footer.designed} {" "} {dictionary.myInfo.fullName}
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    &copy; {new Date().getFullYear()} {dictionary.contact.rights}
                </Typography>
            </Container>
        </Box>
    )
}
