import React, { Component } from "react";
import buttonCss from "../css/button.css";
import Panel from "../Panel";

class List extends Component {

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
        return (
            <div className="row">
                <ul className="list-group">
                    {this.props.todos}
                </ul>
            </div>);

    }
}

export default List;