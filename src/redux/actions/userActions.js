import { USER_LOGGING_IN, USER_LOGGED_IN } from "./actionConstants";

import { login } from "../../api/users";

export const userLogin = (email, password) => async (dispatch) => {
    dispatch({ type: USER_LOGGING_IN });
    try {
        const response = await login(email, password);
        console.log(response);
        dispatch({ type: USER_LOGGED_IN, payload: response });
    } catch (err) {}
};
