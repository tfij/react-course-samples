import React from "react";
import {MyPureComponentProps, MyPureComponentState} from "./interface";

class MyPureComponent extends React.PureComponent<MyPureComponentProps, MyPureComponentState> {
    constructor(props: MyPureComponentProps) {
        super(props);

        this.state = {
            name: 'Tom',
            address: {
                city: "Legionowo",
                state: "Mazowieckie"
            }
        }
    }

    handleSetState = () => {
        this.setState({
            name: 'May'
        })
    }

    render() {
        const { name, address } = this.state
        return (
            <>
                <h1>Pure component</h1>
                <h2>Name: {name} </h2>
                <h3>City: {address.city}</h3>
                <h3>State: {address.state}</h3>
                <button onClick={this.handleSetState}>Set state</button>
            </>
        )
    }
}

export default MyPureComponent
