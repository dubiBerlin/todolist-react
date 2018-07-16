import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counter from "./reducers/index";

import { createStore } from "redux";

let store = createStore(counter);
console.log(store.getState());

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
console.log(store.getState());


ReactDOM.render(
    <App />,
    document.getElementById('root')
);
registerServiceWorker();
