import React, { Component } from 'react';
import '../../App.css';
import Button from "../../Button";
import Button2 from "../../Button2";
import Panel from "../../Panel";
import { connect } from "react-redux";
import { incrementCounter } from "../../actions/index";

class Klickzaehler extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        console.log(this.props);
        return (
            <div className="App">
                <div className="container">
                    <div className="row">
                        <h1>Klickzähler: {this.props.value}</h1>
                    </div>
                    <div className="row">
                        <button type="button" onClick={this.props.onIncrement} className="btn btn-success">Klicken</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        value: state.counter
    }
}

const mapDispatchToProps = {
    onIncrement: incrementCounter
}


let KlickzaehlerContainer = connect(mapStateToProps, mapDispatchToProps)(Klickzaehler);

export default KlickzaehlerContainer;
