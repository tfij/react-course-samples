import React from "react";
import {ButtonPanelProps, ButtonPanelState} from "./interface";
import {Button} from "../Button";
import {ButtonGroup} from "../ButtonGroup";

export class ButtonPanel extends React.Component<ButtonPanelProps, ButtonPanelState>{
    constructor(props: ButtonPanelProps) {
        super(props);
        this.state = {
            selectedIndex: 0
        }
    }

    handleOnClick = (index: number) => {
        this.setState({
            selectedIndex: index
        })
    }

    render() {
        const { selectedIndex } = this.state
        return (
            <>
                <h2>Primary button</h2>
                <Button type={"primary"}>Primary</Button>
                <h2>Default button</h2>
                <Button>Default</Button>
                <h2>Button group</h2>
                <ButtonGroup selected={selectedIndex} onClick={this.handleOnClick}>
                    <Button>Yes</Button>
                    <Button>No</Button>
                </ButtonGroup>
            </>
        );
    }
}