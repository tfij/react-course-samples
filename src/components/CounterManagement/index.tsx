import React from "react";
import {CounterManagementProps, CounterManagementState, UserData} from "./interface";
import axios from 'axios';

class CounterManagement extends React.Component<CounterManagementProps, CounterManagementState> {
    constructor(props: CounterManagementProps) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        this.addNextUser();
    }

    getUserData(userId: number): Promise<UserData> {
        return axios.get(`https://reqres.in/api/users/${userId}`)
            .then(resp => { return resp.data.data })
            .then(userDataAPI => {
                return ({
                    id: userId,
                    firstName: userDataAPI.first_name,
                    lastName: userDataAPI.last_name,
                    avatar: userDataAPI.avatar,
                })
            })
    }

    handleAddClick = () => {
        this.addNextUser();
    }

    private addNextUser() {
        this.getUserData(this.state.users.length + 1)
            .then(userData => {
                this.setState({
                    users: [...this.state.users, userData]
                })
            })
    }

    handleRemoveClick = () => {
        if (this.state.users.length > 0) {
            const newUsersState = [ ...this.state.users ]
            newUsersState.pop()
            this.setState({
                users: newUsersState
            })
        }
    }

    isAddDisable(): boolean {
        return this.state.users.length === 3;
    }

    isRemoveDisable(): boolean {
        return this.state.users.length === 0
    }

    render() {
        return (
            <div>
                <h1>Counter Management</h1>
                <ul>
                    {this.state.users.map(user => {
                        const avatarAlt = `${user.firstName} ${user.lastName} avatar`
                        return <li key={user.id}>
                            <h2>{user.firstName} {user.lastName}</h2>
                            <img alt={avatarAlt} src={user.avatar}/>
                        </li>
                    })}
                </ul>
                <button disabled={this.isAddDisable()} onClick={this.handleAddClick}>+</button>
                <button disabled={this.isRemoveDisable()} onClick={this.handleRemoveClick}>-</button>
            </div>
        )
    }
}

export default CounterManagement;