import type React from "react"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Box, Menu, MenuItem, Button } from "@mui/material"
import { Language as LanguageIcon } from "@mui/icons-material"
// Lista de idiomas soportados
const locales = ["en", "es"]

interface LanguageSwitcherProps {
    lang: string
    dictionary: {
        languageSwitcher: {
            [key: string]: string
        }
    }
}

export default function LanguageSwitcher({ lang, dictionary }: LanguageSwitcherProps) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const navigate = useNavigate();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleLanguageChange = (locale: string) => {
        // Navegar a la misma ruta pero con diferente idioma
        navigate(`/PortfolioSPA/${locale}`)
        handleClose()
    }

    return (
        <Box>
            <Button
                onClick={handleClick}
                startIcon={<LanguageIcon />}
                sx={{
                    color: "inherit",
                    textTransform: "none",
                    fontWeight: "normal",
                }}
            >
                {dictionary.languageSwitcher[lang]}
            </Button>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                {locales.map((locale) => (
                    <MenuItem key={locale} onClick={() => handleLanguageChange(locale)} selected={locale === lang}>
                        {dictionary.languageSwitcher[locale]}
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    )
}
