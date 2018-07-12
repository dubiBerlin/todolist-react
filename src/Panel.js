import React, { Component } from "react";
import panelCss from "./css/panel.css";

class Panel extends Component {
    render() {
        console.log(this)
        return (
            <div className="card panel-margin">
                <div className="card-header">{this.props.panelHeading}</div>
                <div className="card-body">{this.props.panelContent}

                    {this.props.children}


                </div>
            </div>);

    }
}

export default Panel;