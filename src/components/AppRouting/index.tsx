import React from "react";
import {AppRoutingProps, AppRoutingState} from "./interface";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import {Login} from "../../pages/Login";
import {PrivateRouter} from "../PrivateRouter";
import {Button} from "../Button";

export class AppRouting extends React.Component<AppRoutingProps, AppRoutingState> {
    constructor(props: AppRoutingProps) {
        super(props);
        this.state = {
            isLoggedIn: sessionStorage.getItem("loggedUser") !== null
        }
    }

    handleLogin = () => {
        this.setState({
            isLoggedIn: true
        })
    }

    handleLogout = () => {
        this.setState({
            isLoggedIn: false
        })
        sessionStorage.removeItem("loggedUser")
    }

    render() {
        const {isLoggedIn} = this.state
        return (
            <>
                <BrowserRouter>
                    <Route
                        render={(routeProps) => {
                            return isLoggedIn ? <Redirect to='/home'/> : <Login onLoginSuccess={this.handleLogin} {...routeProps} />
                        }}
                        path='/login'
                    />
                    <PrivateRouter isLogin={isLoggedIn}/>
                </BrowserRouter>
                {isLoggedIn && <Button onClick={this.handleLogout}>Logout</Button>}
            </>
        );
    }
}