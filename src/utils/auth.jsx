export const isAuthenticated = () => {
    return !!localStorage.getItem('token');
}
// utils/auth.js
export const getUserId = () => {
    return localStorage.getItem('userId');
};
