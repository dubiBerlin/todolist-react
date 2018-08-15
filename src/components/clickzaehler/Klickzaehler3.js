import React, { Component } from 'react';
import '../../App.css';
import Button from "../../Button";
import Button2 from "../../Button2";
import Panel from "../../Panel";
import { connect } from "react-redux";
import { incrementCounter, addTodo } from "../../actions/index"; // action in Komponente importieren

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
                        <div className="col-md-12">
                            <button type="button" onClick={this.props.onIncrement} className="btn btn-success">Zähler</button>
                        </div>
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
    onIncrement: incrementCounter,
    addTodo: addTodo
}


let KlickzaehlerContainer = connect(mapStateToProps, mapDispatchToProps)(Klickzaehler);

export default KlickzaehlerContainer;
