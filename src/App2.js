import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "./Button";
import Button2 from "./Button2";
import Panel from "./Panel";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }
    this.pressed = this.pressed.bind(this);
  }

  pressed() {
    console.log("hegege");
    this.count++;
    var aha = 2;
    this.setState({
      count: aha
    });
  };


  render() {



    return (
      <div className="App">
        <div className="container">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React </h1>
          </header>
          <p className="App-intro">
            {this.state.count} gedrückt
        </p>
          <Button2 label="Addieren" />
          <Button onClick={this.pressed} label="Drücken" klasse="btn-primary" />
          <Button label="Speichern" klasse="btn-danger" />
          <Panel panelHeading="Überschrift" panelContent="Test1"  ><Button klasse="btn-success" label="Blocken" /></Panel>
          <Panel panelHeading="Überschrift" panelContent="Test2" />

        </div>
      </div>
    );
  }
}

export default App;
