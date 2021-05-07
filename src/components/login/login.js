import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/actions/userActions";

const Login = () => {
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    const dispatch = useDispatch();

    const handleUserLogin = (e) => {
        e.preventDefault();
        dispatch(userLogin(emailInput, passwordInput));
    };

    return (
        <form action="" className="loginContainer">
            <input
                type="email"
                name="email"
                id=""
                placeholder="Email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
            />
            <input
                type="password"
                name=""
                id=""
                placeholder="Password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
            />
            <input
                type="submit"
                value="Login"
                onClick={(e) => handleUserLogin(e)}
            />
        </form>
    );
};
export default Login;
