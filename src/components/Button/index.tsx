import React from "react";
import { ButtonProps } from './interface'
import './style.css'

export const Button: React.FC<ButtonProps> = ({ type='default', onClick, className, children }) => {
    const typeClassName = type === 'primary' ? 'primary' : '';

    return (
        <button className={[typeClassName, className].join(" ")} onClick={onClick}>{children}</button>
    )
}