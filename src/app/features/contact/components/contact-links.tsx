import { Box, Typography } from "@mui/material"

interface ContactLinksProps {
    dictionary: any
}

export default function ContactLinks({ dictionary }: ContactLinksProps) {
    return (
        <Box sx={{ textAlign: "center", mt: 6 }}>
            <Typography variant="body2" color="text.secondary">
                {dictionary.contact.alternateContact}
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "center", gap: 3, mt: 2 }}>
                <a
                    href="mailto:Ricardoperezquintero26@gmail.com"
                    style={{
                        color: "inherit",
                        textDecoration: "none",
                    }}
                    className="highlight-on-hover"
                >
                    {dictionary.contact.sendEmail}
                </a>

                <a
                    href="https://linkedin.com/in/ricardojpq"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        color: "inherit",
                        textDecoration: "none",
                    }}
                    className="highlight-on-hover"
                >
                    LinkedIn
                </a>
               
            </Box>
        </Box>
    )
}
