import React, { Component } from "react";
import buttonCss from "../../css/button.css";
import PropTypes from 'prop-types';

class TodoAdd extends Component {

    constructor(props) {
        super(props);

        this.state = {
            newTodo: ""
        }
        this.onTodoInputChange = this.onTodoInputChange.bind(this);
         this.onAddTodo = this.onAddTodo.bind(this);
     /*   
        this.addOnEnterPress = this.addOnEnterPress.bind(this);
        this.delAllTodos = this.delAllTodos.bind(this); */
    }

    onTodoInputChange(event){
        this.setState({
            newTodo: event.target.value
        })
    }


    onAddTodo(){
        console.log("hi: "+this.state.newTodo)
    }

    componentDidMount() {
        document.addEventListener("keydown", this.addOnEnterPress, false);
    }


    render() {

        var classname = this.props.klasse;
        if (this.state.newTodo === "") {
            classname = classname + " hideBtn";
        }

        let button = (<button type="button" className="btn btn-primary" onClick={this.onAddTodo}>Add todo</button>);

        return (
            <div style={divStyle} >
                <div className="row" >
                    <div className="col-md-6">
                        {button}
                    </div>
                    <div className="col-md-6">
                        <button type="button" onClick={this.delAllTodos} className="btn btn-danger">Löschen</button>
                    </div>
                </div>

                <div className="row" style={divStyle}>
                    <label htmlFor="inputdefault">Eingabe</label>
                    <input className="form-control form-control-sm" onChange={this.onTodoInputChange} type="text" value={this.state.newTodo} />
                </div>
            </div>
        )
    }
}


TodoAdd.propTypes = {
 onAdd: PropTypes.func.isRequired // onAdd ist in der Todolist.js definiert. wird an TodoAdd als prop übergeben
}


var divStyle = {
    margin: '20px'
  };

export default TodoAdd;