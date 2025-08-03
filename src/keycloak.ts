import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
    url: 'http://localhost:8080',
    realm: 'cosbum',
    clientId: 'cosbum-frontend',
});

export default keycloak;
