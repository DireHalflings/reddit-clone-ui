import "./App.css";
import { getUsers } from "./api/users";
import React, { useEffect } from "react";
import NavBar from "./components/navbar/navBar";
import Home from "./components/homePage/home";
import AddPost from "./components/addPost/addPost";
import Login from "./components/login/login";
import { Switch, Route } from "react-router-dom";
//step 1, setup redux
// step 2, the rest of the application

function App() {
    useEffect(() => {
        const getAllUsers = async () => {
            console.log("INSIDE APP JS USE EFFECT");
            console.log(await getUsers());
        };
        getAllUsers();
    }, []);
    return (
        <div className="App">
            <NavBar />
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>

                <Route path="/add-post">
                    <AddPost />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
