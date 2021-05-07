import { USER_LOGGING_IN, USER_LOGGED_IN } from "../actions/actionConstants";

const initialState = {
    loggingIn: false,
    isLoggedIn: false,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGGING_IN:
            return { ...state, loggingIn: true, isLoggedIn: true };
        case USER_LOGGED_IN:
            return { ...state, loggingIn: false, isLoggedIn: false };
        default:
            return state;
    }
};

export default userReducer;
