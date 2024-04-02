// reducers/userReducer.js
const initialState = {
    user: null,
    error: null,
    isAuthenticated: false,

};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return { ...state, user: action.payload, error: null, isAuthenticated: action.payload.isAuthenticated, };
        case 'LOGIN_FAILURE':
            return { ...state, user: null, error: action.payload };
        default:
            return state;
        case 'LOGOUT':
            return {
                ...initialState
            };
    }
};

export default userReducer;
