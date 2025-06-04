import {useCallback, useEffect, useState} from "react"
import { useTheme } from "@/app/core/hooks/use-theme"
import {AppBar, Toolbar, Typography, Box, IconButton, useMediaQuery, Avatar} from "@mui/material"
import { Menu as MenuIcon, DarkMode, LightMode } from "@mui/icons-material"
import LanguageSwitcher from "@/app/layout/components/header/language-switcher"
import NavMenu from "@/app/layout/components/header/nav-menu"
import Sidebar from "@/app/layout/components/sidebar/sidebar"
import ScrollProgressBar from "@/app/layout/components/header/scroll-progress-bar.tsx";
import logo from "@/assets/img/logos/logoTest.svg"
interface HeaderProps {
    dictionary: any
    lang: string
}

export default function Header({ dictionary, lang }: HeaderProps) {
    const { theme, toggleTheme } = useTheme()
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [activeSection, setActiveSection] = useState("home")
    const isMobile = useMediaQuery("(max-width:900px)")
    const [scrollProgress, setScrollProgress] = useState(0);

    const sections = [
        { id: "home", label: dictionary.nav.home },
        { id: "about", label: dictionary.nav.about },
        { id: "experience", label: dictionary.nav.experience },
        { id: "projects", label: dictionary.nav.projects },
        { id: "contact", label: dictionary.nav.contact },
    ]

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen)
    }

    const handleNavClick = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
            setActiveSection(sectionId)
            if (isMobile) {
                setDrawerOpen(false)
            }
        }
    }
    

    // Función para calcular el progreso del scroll
    const calculateScrollProgress = useCallback(() => {
        const windowHeight = document.documentElement.clientHeight
        const documentHeight = document.documentElement.scrollHeight - windowHeight
        const scrollTop = window.scrollY
        return (scrollTop / documentHeight) * 100
    }, [])

    // Función para determinar qué sección está más visible en la ventana
    const calculateVisibleSection = useCallback(() => {
        const sectionElements = sections
            .map((section) => ({
                id: section.id,
                element: document.getElementById(section.id),
            }))
            .filter((section) => section.element)

        // Calcular qué sección tiene la mayor visibilidad en la ventana
        const windowHeight = window.innerHeight
        let maxVisibleSection = { id: "", visiblePercentage: 0 }

        sectionElements.forEach((section) => {
            if (!section.element) return

            const rect = section.element.getBoundingClientRect()

            // Calcular cuánto de la sección es visible en la ventana
            const visibleTop = Math.max(0, rect.top)
            const visibleBottom = Math.min(windowHeight, rect.bottom)
            const visibleHeight = Math.max(0, visibleBottom - visibleTop)

            // Calcular el porcentaje visible de la sección
            const visiblePercentage = (visibleHeight / windowHeight) * 100

            // Si esta sección tiene mayor visibilidad que la actual máxima, actualizarla
            if (visiblePercentage > maxVisibleSection.visiblePercentage) {
                maxVisibleSection = { id: section.id, visiblePercentage }
            }
        })

        return maxVisibleSection.id || "home"
    }, [])

    // Función debounced para manejar el scroll
    const handleScroll = useCallback(() => {
        // Actualizar el progreso del scroll
        const progress = calculateScrollProgress()
        setScrollProgress(progress)

        // Determinar la sección activa
        const visibleSection = calculateVisibleSection()
        if (visibleSection && visibleSection !== activeSection) {
            setActiveSection(visibleSection)
        }
    }, [activeSection, calculateScrollProgress, calculateVisibleSection])

    // Efecto para manejar el scroll
    useEffect(() => {
        // Función debounced para mejorar el rendimiento
        let scrollTimeout: NodeJS.Timeout
        const debouncedScroll = () => {
            clearTimeout(scrollTimeout)
            scrollTimeout = setTimeout(() => {
                handleScroll()
            }, 10) // Pequeño retraso para mejorar el rendimiento
        }

        window.addEventListener("scroll", debouncedScroll)
        // Llamar a handleScroll inicialmente
        handleScroll()

        return () => {
            window.removeEventListener("scroll", debouncedScroll)
            clearTimeout(scrollTimeout)
        }
    }, [handleScroll])

    // Efecto para manejar la navegación por teclado
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Ignorar si estamos en un input o textarea
            if (document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA") {
                return
            }

            const currentIndex = sections.findIndex((section) => section.id === activeSection)
            let nextIndex = currentIndex

            // Navegar con las flechas arriba/abajo
            if (e.key === "ArrowDown" && currentIndex < sections.length - 1) {
                nextIndex = currentIndex + 1
                e.preventDefault()
            } else if (e.key === "ArrowUp" && currentIndex > 0) {
                nextIndex = currentIndex - 1
                e.preventDefault()
            }

            // Si el índice cambió, navegar a la nueva sección
            if (nextIndex !== currentIndex) {
                const nextSectionId = sections[nextIndex].id
                const element = document.getElementById(nextSectionId)
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                    setActiveSection(nextSectionId)
                }
            }
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => {
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, [activeSection, sections])

    return (
        <>
            <AppBar
                position="fixed"
                elevation={0}
                sx={{
                    bgcolor: theme === "dark" ? "rgba(10, 25, 47, 0.8)" : "rgba(255, 255, 255, 0.8)",
                    backdropFilter: "blur(10px)",
                }}
            >
                <ScrollProgressBar progress={scrollProgress}/>
                <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    {/*<Typography*/}
                    {/*    variant="h6"*/}
                    {/*    component="div"*/}
                    {/*    sx={{*/}
                    {/*        flexGrow: 1,*/}
                    {/*        fontWeight: 700,*/}
                    {/*        color: "primary.main",*/}
                    {/*    }}*/}
                    {/*>*/}
                    {/*    RJ*/}
                    {/*</Typography>*/}
                    <Avatar src={logo}   sx={{ width: 50, height: 50 }}></Avatar>

                    {/* Desktop Navigation */}
                    {!isMobile && (
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <NavMenu sections={sections} activeSection={activeSection} onNavClick={handleNavClick} />

                            <LanguageSwitcher lang={lang} dictionary={dictionary} />

                            <IconButton onClick={toggleTheme} color="inherit" sx={{ ml: 2 }} className="highlight-on-hover">
                                {theme === "dark" ? <LightMode /> : <DarkMode />}
                            </IconButton>
                        </Box>
                    )}

                    {/* Mobile Menu Button */}
                    {isMobile && (
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <LanguageSwitcher lang={lang} dictionary={dictionary} />

                            <IconButton onClick={toggleTheme} color="inherit" className="highlight-on-hover">
                                {theme === "dark" ? <LightMode /> : <DarkMode />}
                            </IconButton>

                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="end"
                                onClick={handleDrawerToggle}
                                className="highlight-on-hover"
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    )}
                </Toolbar>
            </AppBar>

            {/* Mobile Navigation Drawer */}
            <Sidebar
                open={drawerOpen}
                onClose={handleDrawerToggle}
                sections={sections}
                activeSection={activeSection}
                onNavClick={handleNavClick}
            />
        </>
    )
}
