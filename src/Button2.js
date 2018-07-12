import React, { Component } from "react";
import buttonCss from "./css/button.css";

class Button2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.incrementCounter = this.incrementCounter.bind(this);
    }


    incrementCounter() {
        var countNew = this.state.count;
        countNew = countNew + 1;
        this.setState({
            count: countNew
        });
    }


    render() {
        console.log(this);
        return (
            <div className="bg1 abstand">
                <div className="row">
                    <div className="abstand">
                        <h3>Zählstand</h3><p />
                        {this.state.count}
                    </div>
                </div>
                <div className="row">
                    <div className="abstand">
                        <button type="button" onClick={this.incrementCounter} className={`btn ${this.props.klasse} btn-block`}>{this.props.label}</button>
                    </div>
                </div>
            </div>);

    }
}

export default Button2;