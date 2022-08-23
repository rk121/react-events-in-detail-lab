// Code DelayedButton Component Here
import React, { Component } from "react";

export default class DelayedButton extends Component {
  handleClick = (event) => {
    const timeout = setTimeout(
      () => this.props.onDelayedClick(event),
      this.props.delay
    );
    return () => clearTimeout(timeout);
  };

  render() {
    return <button onClick={this.handleClick}>DelayedButton</button>;
  }
}
