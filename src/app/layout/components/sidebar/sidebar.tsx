import type React from "react"

import {
    Drawer,
    Box,
    Typography,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    IconButton,
} from "@mui/material"
import {Home, Person, Work, Code, ContactMail, GitHub, LinkedIn, Twitter} from "@mui/icons-material"
import {useTheme} from "@/app/core/hooks/use-theme"
import {motion, AnimatePresence} from "framer-motion"

interface SidebarProps {
    open: boolean
    onClose: () => void
    sections: { id: string; label: string }[]
    activeSection: string
    onNavClick: (sectionId: string) => void
}

export default function Sidebar({open, onClose, sections, activeSection, onNavClick}: SidebarProps) {
    const {theme} = useTheme()

    // Map section IDs to icons
    const sectionIcons: Record<string, React.ReactNode> = {
        home: <Home/>,
        about: <Person/>,
        experience: <Work/>,
        projects: <Code/>,
        contact: <ContactMail/>,
    }

    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={onClose}
            sx={{
                "& .MuiDrawer-paper": {
                    width: 280,
                    bgcolor: "background.paper",
                    color: "text.primary",
                },
            }}
        >
            <Box sx={{p: 2, display: "flex", alignItems: "center", justifyContent: "center"}}>
                <Typography variant="h6" sx={{fontWeight: 700, color: "primary.main"}}>
                    TuNombre
                </Typography>
            </Box>
            <Divider/>
            <List>
                {sections.map((section) => (
                    <ListItem key={section.id} disablePadding>
                        <ListItemButton
                            onClick={() => onNavClick(section.id)}
                            selected={activeSection === section.id}
                            sx={{
                                position: "relative",
                                overflow: "hidden",
                                "&.Mui-selected": {
                                    bgcolor: theme === "dark" ? "rgba(226, 165, 76, 0.1)" : "rgba(217, 119, 6, 0.1)",
                                    color: "primary.main",
                                    "&:hover": {
                                        bgcolor: theme === "dark" ? "rgba(226, 165, 76, 0.2)" : "rgba(217, 119, 6, 0.2)",
                                    },
                                },
                            }}
                        >
                            <ListItemIcon sx={{color: activeSection === section.id ? "primary.main" : "inherit"}}>
                                {sectionIcons[section.id]}
                            </ListItemIcon>
                            <ListItemText primary={section.label}/>
                            <AnimatePresence>
                                {activeSection === section.id && (
                                    <motion.div
                                        initial={{width: 0, opacity: 0}}
                                        animate={{width: "5px", opacity: 1}}
                                        exit={{width: 0, opacity: 0}}
                                        transition={{duration: 0.3}}
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            right: 0,
                                            height: "100%",
                                            backgroundColor: theme === "dark" ? "#ff9d00" : "#ff7b00",
                                        }}
                                    />
                                )}
                            </AnimatePresence>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider/>
            <Box sx={{p: 2, display: "flex", justifyContent: "center", gap: 2}}>
                <IconButton color="inherit" component="a" href="https://github.com" target="_blank">
                    <GitHub/>
                </IconButton>
                <IconButton color="inherit" component="a" href="https://linkedin.com" target="_blank">
                    <LinkedIn/>
                </IconButton>
                <IconButton color="inherit" component="a" href="https://twitter.com" target="_blank">
                    <Twitter/>
                </IconButton>
            </Box>
        </Drawer>
    )
}
