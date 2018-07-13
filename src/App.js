import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "./Button";
import Button2 from "./Button2";
import Panel from "./Panel";
import List from "./components/List";
import TodoAddBtn from "./components/TodoAddBtn";
import TodoAddInput from "./components/TodoAddInput";


class App extends Component {
    constructor(props) {
        super(props);

        this.myarray = [{ id: 7, title: "Kochen" }, { id: 8, title: "Seite bauen" }, { id: 9, title: "react lernen" }, { id: 10, title: "php symphony" }, { id: 11, title: "java" }, { id: 12, title: "react-native" }, { id: 13, title: "What is an Array" }, { id: 14, title: "servlets" }, { id: 15, title: "bootstrap" }, { id: 16, title: "nodejs" }, { id: 17, title: "js" }];


        this.state = {
            count: 0,
            inputVal: "",
            todos: [
                { id: 1, title: "Obst kaufen" },
                { id: 2, title: "Zur Bank gehen" },
                { id: 3, title: "Training" },
                { id: 4, title: "Programmieren" },
                { id: 5, title: "Whey protein kaufen" },
                { id: 6, title: "Wohnung sauber machen" }
            ]
        }
        this.addTodo = this.addTodo.bind(this);
    }


    addTodo(newTodo) {
        console.log("addTodo")
        var cnt = this.state.count + 1;

        const todo = {
            id: cnt + 17,
            title: newTodo
        }


        var todosTemp = this.state.todos;
        todosTemp.push(todo);


        this.setState({
            todos: todosTemp,
            count: cnt
        });
    }


    render() {

        const liste = this.state.todos.map((todo) => {
            return (<li key={todo.id} className="list-group-item">{todo.title}</li>)
        }
        );

        return (
            <div className="App">
                <div className="container">
                    <div className="row">
                        <h2>Todo</h2>
                    </div>
                    <TodoAddBtn typ="button" onAdd={this.addTodo} name="Add ToDo" klasse="btn btn-success" />
                    <Panel titel="Liste">
                        <List todos={liste} />
                    </Panel>
                </div>
            </div>
        );
    }
}

export default App;
