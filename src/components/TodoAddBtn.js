import React, { Component } from "react";

class TodoAddBtn extends Component {

    render() {
        return (
            <div className="row">
                <button type={this.props.typ} className={this.props.klasse} onClick={this.props.onAdd}>{this.props.name}</button>
            </div>
        )
    }
}

export default TodoAddBtn;