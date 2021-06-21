import React from "react";
import {HeaderNavigationProps, HeaderNavigationState} from "./interface";
import {Link} from "react-router-dom";
import {HeaderNavigationLink} from "../HeaderNavigationLink";

export class HeaderNavigation extends React.Component<HeaderNavigationProps, HeaderNavigationState> {
    render() {
        return (
            <>
                <Link component={HeaderNavigationLink} to="/buttons">Buttons</Link>
                <Link component={HeaderNavigationLink} to="/students">Students</Link>
                <Link component={HeaderNavigationLink} replace to="/about">About</Link>
                <Link component={HeaderNavigationLink} replace to="/home">Home</Link>
            </>
        )
    }
}