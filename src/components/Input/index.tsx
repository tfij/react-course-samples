import React, {createRef} from "react";
import {InputProps, InputState} from "./interface";

export class Input extends React.Component<InputProps, InputState>{
    private inputRef = createRef<HTMLInputElement>()

    constructor(props: InputProps) {
        super(props);
        this.state = {
            error: props.error,
            value: props.value,
        }
    }

    static getDerivedStateFromProps(props: InputProps) {
        return {
            error: props.error,
            value: props.value,
        }
    }

    componentDidUpdate () {
        this.state.error && this.inputRef.current?.focus();
    }

    onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.props.onValueChange(event.target.value)
    }

    render() {
        const { label, secret = false } = this.props
        const { value, error } = this.state
        return (
            <div>
                <h4>{label}</h4>
                <input ref={this.inputRef} value={value} onChange={this.onChange} type={secret ? 'password' : 'text'} />
                {error && <div>{error}</div>}
            </div>
        );
    }
}
