import React, { Component } from "react";
import panelCss from "./css/panel.css";

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

export default Panel;