import React, { Component } from "react";
import panelCss from "../css/panel.css";

class TodoAddInput extends Component {

    constructor(props) {
        super(props);
        this.onTodoInputChange = this.onTodoInputChange.bind(this);
        this.state = {
            newTodo: "test"
        }
    }

    onTodoInputChange(event) {
        console.log(event.target.value);
        this.setState({
            newTodo: event.target.value
        })
    }

    render() {
        return (
            <div className="row">
                <label htmlFor="inputdefault">Small input</label>
                <input className="form-control form-control-sm" onChange={this.onTodoInputChange} type="text" value={this.state.newTodo} />
            </div >)
    }
}

export default TodoAddInput;