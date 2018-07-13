import React, { Component } from "react";
import buttonCss from "../css/button.css";

class TodoAddBtn extends Component {

    constructor(props) {
        super(props);

        this.state = {
            newTodo: ""
        }

        this.onAddTodo = this.onAddTodo.bind(this);

        this.onTodoInputChange = this.onTodoInputChange.bind(this);
    }

    onAddTodo() {
        console.log(
            this.state.newTodo
        )
        this.props.onAdd(this.state.newTodo)
        this.setState({
            newTodo: ""
        })
    }

    onTodoInputChange(event) {
        this.setState({
            newTodo: event.target.value
        })
    }

    render() {

        var classname = this.props.klasse;
        console.log(buttonCss.hideBtn)
        if (this.state.newTodo === "") {
            classname = classname + " hideBtn";
        }

        let button = (<button type={this.props.typ} className={classname} onClick={this.onAddTodo}>{this.props.name}</button>);

        return (<div>
            <div className="row">
                {button}
            </div>
            <div className="row">
                <label htmlFor="inputdefault">Eingabe</label>
                <input className="form-control form-control-sm" onChange={this.onTodoInputChange} type="text" value={this.state.newTodo} />
            </div>
        </div>
        )
    }
}

export default TodoAddBtn;