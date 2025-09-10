import { Controls } from "components/Controls/Controls";
import React from "react";

export class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = { value: this.props.initialValue };

  handleIncrement = () => {
    this.setState((prevState) => ({
      value: prevState.value + 1,
    }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    return (
      <div>
        <span>{this.state.value}</span>
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}
