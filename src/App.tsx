import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslations } from '@/app/features/i18n/services/i18n';
import LandingPage from '@/app/features/landing/landing-page';
import Layout from '@/app/layout/layout';
import ThemeProvider from '@/app/shared/providers/theme-provider';

export default function App() {
    const { lang = 'es' } = useParams<{ lang: string }>();
    const [showLanding, setShowLanding] = useState(true);
    const { dictionary } = useTranslations(lang);
    
    useEffect(() => {
        // Check if user has already seen the landing page
        const hasSeenLanding = localStorage.getItem('hasSeenLanding');
        if (hasSeenLanding) {
            setShowLanding(false);
        }
    }, []);

    const handleEnterSite = () => {
        setShowLanding(false);
        localStorage.setItem('hasSeenLanding', 'true');
    };

    return (
        <ThemeProvider>
            <div className="min-h-screen bg-background text-foreground pb-10">
                {showLanding ? (
                    <LandingPage onEnter={handleEnterSite} dictionary={dictionary} lang={lang} />
                ) : (
                    <Layout dictionary={dictionary} lang={lang} />
                )}
            </div>
        </ThemeProvider>
    );
}