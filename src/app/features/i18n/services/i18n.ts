import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from '@/app/features/i18n/vocabs/en.json';
import esTranslation from '@/app/features/i18n/vocabs/es.json';

// Configuración de i18next
i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: enTranslation,
            },
            es: {
                translation: esTranslation,
            },
        },
        lng: 'es', // idioma por defecto
        fallbackLng: 'es',
        interpolation: {
            escapeValue: false, // no es necesario para React
        },
    });

export default i18n;

// Hook personalizado para obtener traducciones
export const useTranslations = (lang: string) => {
    // Cambiar el idioma si es diferente al actual
    if (i18n.language !== lang) {
        i18n.changeLanguage(lang);
    }

    return {
        dictionary: i18n.getDataByLanguage(lang)?.translation || {},
        lang,
    };
};