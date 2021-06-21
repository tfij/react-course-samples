import { RouteComponentProps } from "react-router";

export interface LoginProps extends RouteComponentProps{
    onLoginSuccess(): void
}

export interface LoginState {
    userName: string
    password: string
    error: string
}
