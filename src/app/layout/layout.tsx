import { useEffect } from "react"
import Header from "@/app/layout/components/header/header"
import Footer from "@/app/layout/components/footer/footer"
import CustomCursor from "@/app/shared/components/effects/custom-cursor"
import TechLogos from "@/app/shared/components/effects/tech-logos"
import ColorParticles from "@/app/shared/components/effects/color-particles"
import Home from "@/app/features/home/home"
import AboutSection from "@/app/features/about/about"
import ExperienceSection from "@/app/features/experience/experience"
import ProjectsSection from "@/app/features/projects/projects"
import ContactSection from "@/app/features/contact/contact"

interface MainLayoutProps {
    dictionary: any
    lang: string
}

export default function MainLayout({ dictionary, lang }: MainLayoutProps) {

    // Add highlight-on-hover class to interactive elements
    useEffect(() => {
        const buttons = document.querySelectorAll("button, a, .MuiCard-root, .MuiPaper-root")
        buttons.forEach((button) => {
            button.classList.add("highlight-on-hover")
        })
    }, [])

    return (
        <>
            <Header dictionary={dictionary} lang={lang} />

            <main>
                <Home dictionary={dictionary} lang={lang} />
                <AboutSection dictionary={dictionary} />
                <ExperienceSection dictionary={dictionary} />
                <ProjectsSection dictionary={dictionary} />
                <ContactSection dictionary={dictionary} />
            </main>

            <Footer dictionary={dictionary} />

            {/* Effects */}
            <CustomCursor />
            <TechLogos />
            <ColorParticles />
        </>
    )
}
