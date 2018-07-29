import React, { Component } from "react";
import buttonCss from "../../css/button.css";
import PropTypes from 'prop-types';

class TodoAddBtn extends Component {

    constructor(props) {
        super(props);

        this.state = {
            newTodo: ""
        }

        this.onAddTodo = this.onAddTodo.bind(this);
        this.onTodoInputChange = this.onTodoInputChange.bind(this);
        this.addOnEnterPress = this.addOnEnterPress.bind(this);
        this.delAllTodos = this.delAllTodos.bind(this);
    }

    componentDidMount() {
        document.addEventListener("keydown", this.addOnEnterPress, false);
    }

    addOnEnterPress(e) {
        console.log(e);
        if (e.isTrusted && e.key === "Enter") {
            this.props.onAdd(this.state.newTodo)
            this.setState({
                newTodo: ""
            })
        }
    }

    delAllTodos() {
        this.props.onDel();
    }

    onAddTodo() {
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
        if (this.state.newTodo === "") {
            classname = classname + " hideBtn";
        }

        let button = (<button type={this.props.typ} className={classname} onClick={this.onAddTodo}>{this.props.name}</button>);

        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        {button}
                    </div>
                    <div className="col-md-6">
                        <button type="button" onClick={this.delAllTodos} className="btn btn-danger">Löschen</button>
                    </div>
                </div>

                <div className="row">
                    <label htmlFor="inputdefault">Eingabe</label>
                    <input className="form-control form-control-sm" onChange={this.onTodoInputChange} type="text" value={this.state.newTodo} />
                </div>
            </div>
        )
    }
}


TodoAddBtn.propTypes = {
    onAddTodo: PropTypes.func.isRequired,
    addOnEnterPress: PropTypes.func.isRequired,
    onTodoInputChange: PropTypes.func.isRequired,
    delAllTodos: PropTypes.func.isRequired
}

export default TodoAddBtn;