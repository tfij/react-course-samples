import React from "react";
import {ButtonGroupProps, ButtonGroupState} from "./interface";
import {ButtonProps} from "../Button/interface";
import './style.css'

export class ButtonGroup extends React.Component<ButtonGroupProps, ButtonGroupState>{
    render() {
        return (
            <>
                {React.Children.map(this.props.children as React.ReactElement<ButtonProps>, (child, index) => {
                    const selectedClassName = this.props.selected === index ? "selected" : "";
                    return React.isValidElement(child)
                        ? React.cloneElement(child, {className: selectedClassName, onClick: () => this.props.onClick(index)})
                        : child
                })}
            </>
        );
    }
}
