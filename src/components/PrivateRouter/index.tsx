import React from "react";
import {BrowserRouter, Link, Redirect, Route, Switch} from "react-router-dom";
import {PrivateRouterProps, PrivateRouterState} from "./interface";
import {ButtonPanel} from "../ButtonPanel";
import {StudentsPanel} from "../StudentsPanel";
import {Login} from "../../pages/Login";
import {About} from "../../pages/About";
import {Home} from "../../pages/Home";
import {HeaderNavigation} from "../HeaderNavigation";

export class PrivateRouter extends React.Component<PrivateRouterProps, PrivateRouterState>{
    render() {
        const { isLogin } = this.props
        return isLogin ? (
            <>
                <HeaderNavigation />
                <Switch>
                    <Route component={ButtonPanel} path="/buttons"/>
                    <Route component={StudentsPanel} path="/students"/>
                    <Route component={About} path="/about"/>
                    <Route component={Home} path="/home"/>
                    <Redirect to="/home" />
                </Switch>
            </>
        ) : <Redirect to="/login" />
    }
}