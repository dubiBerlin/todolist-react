import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "./Button";
import Button2 from "./Button2";
import Panel from "./Panel";

class Klickzaehler extends Component {
    constructor(props) {
        super(props);

        this.pressed = this.pressed.bind(this);
    }

    pressed() {
        this.props.onIncrement();
    };


    render() {



        return (
            <div className="App">
                <div className="container">
                    <div className="row">
                        <h1>Klickzähler: {this.props.count}</h1>
                    </div>
                    <div className="row">
                        <button type="button" onClick={this.pressed} className="btn btn-success">Klicken</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Klickzaehler
    ;
