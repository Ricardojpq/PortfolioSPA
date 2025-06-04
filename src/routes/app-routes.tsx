import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import App from "@/App"

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/es" replace />} />
                <Route path="/:lang" element={<App />} />
            </Routes>
        </BrowserRouter>
    )
}
