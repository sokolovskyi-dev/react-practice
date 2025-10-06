import { Component } from "react";

export class Reader extends Component {
  state = { index: 0 };

  changeIndex = (value) => {
    this.setState((prevState) => ({ index: prevState.index + value }));
  };

  render() {
    const currentItem = this.props.items[this.state.index];
    return (
      <div>
        <section>
          <button
            type="button"
            disabled={this.state.index <= 0}
            onClick={() => this.changeIndex(-1)}
          >
            Назад
          </button>
          <button
            type="button"
            disabled={this.state.index >= this.props.items.length - 1}
            onClick={() => this.changeIndex(1)}
          >
            Вперед
          </button>
        </section>

        <p>
          {this.state.index + 1}/{this.props.items.length}
        </p>

        <article>
          <h2>{currentItem.title}</h2>
          <p>{currentItem.text}</p>
        </article>
      </div>
    );
  }
}
