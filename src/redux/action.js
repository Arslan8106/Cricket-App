export const Modal_SUCCESS = 'Modal_SUCCESS';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const SIGNUP_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';

export const loginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    payload: user,
});
export const signUpSuccess = (user) => ({
    type: SIGNUP_SUCCESS,
    payload: user,
});

export const logout = () => ({
    type: LOGOUT,
});
