import React, { Component } from "react";
import buttonCss from "../css/button.css";
import Panel from "../Panel";
import PropTypes from 'prop-types';

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
                <ul className="list-group" style={{ width: 700 }}>
                    {this.props.todos}
                </ul>
            </div>);

    }
}

List.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired
        })
    ).isRequired
}


export default List;