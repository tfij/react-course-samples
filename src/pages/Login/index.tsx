import React from "react";
import {LoginProps, LoginState} from "./interface";
import {Input} from "../../components/Input";
import {Button} from "../../components/Button";

export class Login extends React.Component<LoginProps, LoginState> {
    constructor(props: LoginProps) {
        super(props);
        this.state = {
            userName: "",
            password: "",
            error: ""
        }
    }

    handleUserNameChanged = (newValue: string) => {
        this.setState({
            userName: newValue,
            error: ""
        })
    }

    handlePasswordChanged = (newValue: string) => {
        this.setState({
            password: newValue,
            error: ""
        })
    }

    handleLogIn = () => {
        const {history} = this.props
        const {userName, password} = this.state
        if (userName === "admin" && password === "1234") {
            sessionStorage.setItem("loggedUser", userName)
            history.push("/home")
            this.props.onLoginSuccess()
        } else {
            this.setState({
                error: "Invalid user name or password"
            })
        }
    }

    render() {
        const { userName, password, error } = this.state
        return (
            <>
                <h1>Login</h1>
                <Input label="User name" value={userName} error={error} onValueChange={this.handleUserNameChanged} />
                <Input label="User name" value={password} error='' onValueChange={this.handlePasswordChanged} secret={true} />
                <Button onClick={this.handleLogIn}>Login</Button>
            </>
        );
    }
}