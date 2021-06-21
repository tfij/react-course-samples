import React from "react";
import {HeaderNavigationLinkProps, HeaderNavigationLinkState} from "./interface";
import './style.css'

export class HeaderNavigationLink extends React.Component<HeaderNavigationLinkProps, HeaderNavigationLinkState>{
    render() {
        const { children, navigate, href } = this.props;
        const selected = window.location.pathname === href
        return (
            <div onClick={navigate} className={selected ? "nav-item-selected nav-item" : "nav-item"}>{children}</div>
        );
    }
}