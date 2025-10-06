import { Component } from "react";
import Controls from "./Controls";
import Progress from "./Progress";
import Publication from "./Publication";

const LS_KEY = "reader_item_index";
export class Reader extends Component {
  state = { index: 0 };

  changeIndex = (value) => {
    this.setState((prevState) => ({ index: prevState.index + value }));
  };

  componentDidMount = () => {
    const savedState = localStorage.getItem(LS_KEY);
    if (savedState) {
      this.setState({ index: Number(savedState) });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.index !== this.state.index) {
      localStorage.setItem(LS_KEY, this.state.index);
    }
  }

  render() {
    const currentItem = this.props.items[this.state.index];
    return (
      <div>
        <Controls
          current={this.state.index + 1}
          total={this.props.items.length}
          onChange={this.changeIndex}
        />

        <Progress
          current={this.state.index + 1}
          total={this.props.items.length}
        />

        <Publication item={currentItem} />
      </div>
    );
  }
}
