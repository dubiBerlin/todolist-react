import React, { Component } from "react";
import buttonCss from "./css/button.css";

class MyButton extends Component {
    render() {
        console.log(this);
        return (
            <div className="bg1 abstand">
                <div className="row">
                    <div className="abstand">
                        <button type="button" className={`btn ${this.props.klasse} btn-block`}>{this.props.label}</button>
                    </div>
                </div>
            </div>);

    }
}

export default MyButton;