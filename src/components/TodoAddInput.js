import React, { Component } from "react";
import panelCss from "./css/panel.css";

class TodoAddBtn extends Component {

    render() {
        return (
            <div className="row">
                <label htmlFor="inputdefault">Small input</label>
                <input className="form-control form-control-sm" value={this.state.inputVal} id="inputdefault" type="text" />
            </div >)
    }
}

export default TodoAddBtn;