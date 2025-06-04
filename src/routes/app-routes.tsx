import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import App from "@/App"

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="PortfolioSPA/" element={<Navigate to="es" replace />} />
                <Route path="PortfolioSPA/:lang" element={<App />} />
            </Routes>
        </BrowserRouter>
    )
}
