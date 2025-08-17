import Keycloak from 'keycloak-js'

const keycloak = new Keycloak({
    url: 'http://localhost:8080/',
    realm: 'cosbum',
    clientId: 'cosbum-frontend',
})
const timeout = (ms: number) =>
    new Promise<false>(resolve => setTimeout(() => resolve(false), ms))
let kcAvailable = true

const keycloakService = {
    keycloak,
    initKeycloak: async () => {
        try {
            const result = await Promise.race<boolean>([
                keycloak.init({
                    onLoad: 'check-sso',
                    pkceMethod: 'S256',
                    checkLoginIframe: false,
                    silentCheckSsoRedirectUri: `${window.location.origin}/silent-check-sso.html`,
                }),
                timeout(3000),
            ])
            if (!result) {
                kcAvailable = false
                ;(keycloak as any).authenticated = false
            }
            return result
        } catch {
            kcAvailable = false
            ;(keycloak as any).authenticated = false
            return false
        }
    },
    isAvailable: () => kcAvailable,
    login: () => (kcAvailable ? keycloak.login() : Promise.resolve()),
    logout: () => (kcAvailable ? keycloak.logout({ redirectUri: window.location.origin }) : Promise.resolve()),
    isAuthenticated: () => (kcAvailable && keycloak.authenticated) || false,
    getToken: () => (kcAvailable ? keycloak.token : null),
    updateToken: () => (kcAvailable ? keycloak.updateToken(30) : Promise.resolve(false)),
    getUserName: async (): Promise<string | null> => {
        if (!kcAvailable || !keycloak.authenticated) return null
        const info: any = await keycloak.loadUserInfo().catch(() => null)
        return info?.preferred_username || info?.name || null
    },
}

export default keycloakService
