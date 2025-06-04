import { Box } from "@mui/material"
import { useTheme } from "@/app/core/hooks/use-theme"
import { motion } from "framer-motion"

export interface ScrollProgressBarProps {
    progress: number
}

export default function ScrollProgressBar({ progress }: ScrollProgressBarProps) {
    const { theme } = useTheme()

    return (
        <Box
            sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "3px",
                bgcolor: "transparent",
                zIndex: 1000,
                overflow: "hidden",
            }}
        >
            <motion.div
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
                style={{
                    height: "100%",
                    background: `linear-gradient(90deg, 
            ${theme === "dark" ? "#ff9d00" : "#ff7b00"} 0%, 
            ${theme === "dark" ? "#ff3d71" : "#e91e63"} 50%, 
            ${theme === "dark" ? "#00b8ff" : "#0084ff"} 100%)`,
                    borderRadius: "0 4px 4px 0",
                }}
            />
        </Box>
    )
}