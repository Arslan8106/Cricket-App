// actions/userActions.js
export const loginSuccess = (user) => ({
    type: 'LOGIN_SUCCESS',
    payload: user,
});

export const loginFailure = (error) => ({
    type: 'LOGIN_FAILURE',
    payload: error,
});
export const logout = (payload) => {
    return {
        type: 'LOGOUT',
    };
};
