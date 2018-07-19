import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Klickzaehler from './Klickzaehler3';
import registerServiceWorker from './registerServiceWorker';
import counter from "./reducers/index";
import App from "./App";
import { incrementCounter } from "./actions/index";
import { connect } from "react-redux";

import { createStore } from "redux";

// den Reducer in den Store anmelden
let store = createStore(counter);


const mapStateToProps = state => {
    return {
        count: state
    }
}

const mapDispatchToProps = {
    onIncrement: incrementCounter
}


let Klickzaehler2 = connect(mapStateToProps, mapDispatchToProps)(Klickzaehler);

const render = () => {

    ReactDOM.render(
        <Klickzaehler2
            store={store}
        />,
        document.getElementById('root')
    );

}

render();
registerServiceWorker();
