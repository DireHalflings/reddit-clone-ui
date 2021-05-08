import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/actions/userActions";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

//history.push('/home')

const Login = () => {
    const [emailInput, setEmailInput] = useState("Sincere@april.biz");
    const [passwordInput, setPasswordInput] = useState("password1");

    const dispatch = useDispatch();

    const history = useHistory();
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    useEffect(() => {
        console.log("test");
        console.log(isLoggedIn);
        if (isLoggedIn) {
            history.push("/home");
        }
    }, [isLoggedIn]);

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
