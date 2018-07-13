import React, { Component } from "react";
import panelCss from "./css/panel.css";
import PropTypes from 'prop-types';

class Panel extends Component {
    render() {
        return (
            <div className="row">
                <div className="card panel-margin">
                    <div className="card-header">{this.props.titel}</div>
                    <div className="card-body">
                        {this.props.children}
                    </div>
                </div>
            </div>);

    }
}

Panel.propTypes = {
    titel: PropTypes.string.isRequired
}

export default Panel;