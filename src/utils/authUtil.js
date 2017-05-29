import jwtDecode from 'jwt-decode';

export default {
    storeToken: (token) => {
        localStorage.setItem('jwt', token);
    },
    isAuthenticated: () => {
        let jwt = localStorage.getItem('jwt');
        if (jwt === null) {
            return false;
        }

        const decodedJwt = jwtDecode(jwt);
        return decodedJwt.exp >= Date.now() / 1000;

    },
    logout: () => {
        localStorage.removeItem('jwt');
    }
}
