import React from "react";
import {FruitsDispatchProps, FruitsOwnProps, FruitsProps, FruitsState, FruitsStateProps} from "./interface";
import {connect, MapDispatchToProps, MapStateToProps} from 'react-redux'

class Fruits extends React.Component<FruitsProps> {

    addFruits = () => {
        this.props.addFruits([ 'apple', 'watermelon' ])
    }

    render() {
        const { fruits } = this.props

        return (
            <>
                <h2>Fruits</h2>
                <ul>
                    {fruits.map(fruit => <li key={fruit}>{fruit}</li>)}
                </ul>
                <button onClick={this.addFruits}>Add</button>
            </>
        );
    }
}

const mapStateProps: MapStateToProps<FruitsStateProps, FruitsOwnProps, string[]> = (state, ownProps) => {
    return {
        fruits: state
    }
}

const mamDispatchToProps: MapDispatchToProps<FruitsDispatchProps, FruitsOwnProps> = (dispatch, ownProps) => {
    return {
        addFruits(fruits: string[]): void {
            dispatch({ type: "ADD_FRUITS", fruits: fruits})
        }
    }
}

export default connect(mapStateProps, mamDispatchToProps)(Fruits)
