import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "./Button";
import Button2 from "./Button2";
import Panel from "./Panel";

class App extends Component {
    constructor(props) {
        super(props);

        this.myarray = ["Kochen", "Seite bauen", "react lernen", "php symphony", "java", "react-native", "What is an Array", "servlets", "bootstrap", "nodejs", "js"];


        this.state = {
            count: 0,
            inputVal: "",
            todos: [
                "Obst kaufen",
                "Zur Bank gehen",
                "Training",
                "Programmieren",
                "Whey protein kaufen",
                "Wohnung sauber machen"
            ]
        }
        this.addTodo = this.addTodo.bind(this);
    }


    addTodo() {
        console.log("addTodo")
        var cnt = this.state.count + 1;
        var todosTemp = this.state.todos;
        if (cnt < this.myarray.length) {
            todosTemp.push(this.myarray[cnt]);
        } else {
            todosTemp.push("React redux " + cnt);
        }


        this.setState({
            todos: todosTemp,
            count: cnt
        });
    }


    render() {

        const liste = this.state.todos.map((todo) => {
            console.log(todo);
            return (<li className="list-group-item">{todo}</li>)
        }
        );

        return (
            <div className="App">
                <div className="container">
                    <div className="row">
                        <h2>Todo</h2>
                    </div>
                    <div className="row">
                        <button type="button" className="btn btn-success" onClick={this.addTodo}>Add todo</button>
                    </div>
                    <div className="row">
                        <label for="inputdefault">Small input</label>
                        <input className="form-control form-control-sm" value={this.state.inputVal} id="inputdefault" type="text" />
                    </div >
                    <div className="row">
                        <ul className="list-group">
                            {liste}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
