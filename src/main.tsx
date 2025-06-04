import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes/app-routes';
import './styles/globals.css';
import '@/app/features/i18n/services/i18n';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AppRoutes />
    </React.StrictMode>
);