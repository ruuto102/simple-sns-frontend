import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import auth from './services/keycloak.js'

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

auth.initKeycloak().then(() => {
    createRoot(rootElement).render(
        <StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </StrictMode>
    );
});
