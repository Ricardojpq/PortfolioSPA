import { useContext } from "react"
import { ThemeContext } from "@/app/shared/providers/theme-provider"

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}