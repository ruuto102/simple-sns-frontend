import Keycloak from 'keycloak-js'

const keycloak = new Keycloak({
    url: 'http://localhost:8080/',
    realm: 'cosbum',
    clientId: 'cosbum-frontend',
})

const initKeycloak = () => {
    return keycloak.init({
        onLoad: 'check-sso',
        pkceMethod: 'S256',
        checkLoginIframe: false,
        silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
    })
}

const login = () => keycloak.login()
const logout = () => keycloak.logout({ redirectUri: window.location.origin })
const isAuthenticated = () => keycloak.authenticated ?? false
const getToken = () => keycloak.token
const updateToken = () => keycloak.updateToken(30)

const getUserName = async (): Promise<string | null> => {
    if (!keycloak.authenticated) return null
    const info: any = await keycloak.loadUserInfo()
    return info.preferred_username || info.name || null
}

export default {
    keycloak,
    initKeycloak,
    login,
    logout,
    isAuthenticated,
    getToken,
    updateToken,
    getUserName,
}
