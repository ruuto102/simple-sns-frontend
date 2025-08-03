import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import keycloakService from './services/keycloak';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

keycloakService.initKeycloak().then(() => {
    createRoot(rootElement).render(
        <StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </StrictMode>
    );
});
