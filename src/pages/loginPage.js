import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../components/login/login";
import LoginContainer from "../components/loginContainer/loginContainer";
import Register from "../components/register/regirster";

const LoginPage = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    {/* <Login />
                    <Register /> */}
                    <LoginContainer />
                </Route>
                {/* <Route path="/register">
                    <Register />
                </Route> */}
            </Switch>
        </div>
    );
};

export default LoginPage;
