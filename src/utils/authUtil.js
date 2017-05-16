export default {
    storeToken: (token) => {
        localStorage.setItem('jwt', token);
    },
    isAuthenticated: () => {
        return localStorage.getItem('jwt') !== null;
    },
    logout: () => {
        localStorage.removeItem('jwt');
    }
}
