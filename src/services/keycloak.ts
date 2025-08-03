import Keycloak from 'keycloak-js'

const keycloak = new Keycloak({
    url: 'http://localhost:8080/',
    realm: 'cosbum',
    clientId: 'cosbum-frontend',
})

const keycloakService = {
    keycloak,
    initKeycloak: () => keycloak.init({
        onLoad: 'check-sso',
        pkceMethod: 'S256',
        checkLoginIframe: false,
        silentCheckSsoRedirectUri: `${window.location.origin}/silent-check-sso.html`,
    }),
    login: () => keycloak.login(),
    logout: () => keycloak.logout({ redirectUri: window.location.origin }),
    isAuthenticated: () => keycloak.authenticated ?? false,
    getToken: () => keycloak.token,
    updateToken: () => keycloak.updateToken(30),
    getUserName: async (): Promise<string | null> => {
        if (!keycloak.authenticated) return null
        const info: any = await keycloak.loadUserInfo()
        return info.preferred_username || info.name || null
    },
}

export default keycloakService
