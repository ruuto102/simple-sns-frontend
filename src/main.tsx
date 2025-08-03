import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import keycloak from './keycloak';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

keycloak.init({
    onLoad: 'login-required',
    pkceMethod: 'S256',
    checkLoginIframe: false,
}).then(authenticated => {
    if (authenticated) {
        console.log('Keycloak authenticated')
    } else {
        window.location.reload()
    }
})

createRoot(rootElement).render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>
);
