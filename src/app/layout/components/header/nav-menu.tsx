import {Box} from "@mui/material"
import { motion, AnimatePresence } from "framer-motion"
import {useTheme} from "@/app/core/hooks/use-theme.tsx";
interface NavMenuProps {
    sections: { id: string; label: string }[]
    activeSection: string
    onNavClick: (sectionId: string) => void
}

export default function NavMenu({sections, activeSection, onNavClick}: NavMenuProps) {
    const { theme } = useTheme()
    return (
        <>
            {sections.map((section) => (
                <Box
                    key={section.id}
                    component="button"
                    onClick={() => onNavClick(section.id)}
                    className="highlight-on-hover"
                    sx={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        mx: 1.5,
                        py: 1,
                        px: 2,
                        borderRadius: 1,
                        color: activeSection === section.id ? "primary.main" : "text.secondary",
                        fontWeight: activeSection === section.id ? 600 : 400,
                        position: "relative",
                        "&:hover": {
                            color: "primary.main",
                        },
                        transition: "all 0.3s ease",
                    }}
                >
                    {section.label}
                    <AnimatePresence>
                        {activeSection === section.id && (
                            <motion.div
                                initial={{ width: 0, opacity: 0 }}
                                animate={{ width: "30%", opacity: 1 }}
                                exit={{ width: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                style={{
                                    position: "absolute",
                                    bottom: 0,
                                    left: "50%",
                                    height: "2px",
                                    backgroundColor: theme === "dark" ? "#ff9d00" : "#ff7b00",
                                    transform: "translateX(-50%)",
                                }}
                            />
                        )}
                    </AnimatePresence>
                </Box>
            ))}
        </>
    )
}
