import React from 'react';
import './App.css';
import {AppRouting} from "./components/AppRouting";
import {createStore} from 'redux'
import {fruitsReducer} from "./reducers/fruitsReducer";
import {Provider} from "react-redux";

const store = createStore(fruitsReducer, ['banana', 'orange']);

function App() {
    return (
        <Provider store={store}>
            <AppRouting/>
        </Provider>
    );
}

export default App;
