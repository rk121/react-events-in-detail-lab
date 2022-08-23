// Code CoordinatesButton Component Here
import React, { Component } from "react";

export default class CoordinatesButton extends Component {
  handleClick = (event) => {
    const xy = [event.clientX, event.clientY];
    this.props.onReceiveCoordinates(xy);
  };
  render() {
    return <button onClick={this.handleClick}>Click</button>;
  }
}
