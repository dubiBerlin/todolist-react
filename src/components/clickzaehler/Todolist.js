import React, { Component } from "react";
import buttonCss from "../../css/button.css";
import Panel from "../../Panel";
import PropTypes from 'prop-types';
import { connect } from "react-redux";


class Todolist extends Component{

render(){
    console.log("todos", this.props);
    var todos;
    if(this.props.todos!=undefined){
        todos = this.props.todos.map((todo)=> {
            return (<li key={todo.id}>{todo.title}</li>)
        })
    }
  

    return(
        <div className="row">
                <ul className="list-group" style={{ width: 700 }}>
                {todos}
                </ul>
            </div>
    )
}


}

const mapStateToProps = state => {
    console.log("mapStateToProps", state);
    return { todos: state.todos}
};
const mapDispatchToProps={}

export default connect(mapStateToProps,mapDispatchToProps) (Todolist);