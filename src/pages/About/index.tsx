import React from "react";
import {AboutProps, AboutState} from "./interface";
import Fruits from "../../components/Fruits";

export class About extends React.Component<AboutProps, AboutState>{
    render() {
        return (
            <>
                <h1>About</h1>
                <Fruits />
            </>
        );
    }
}