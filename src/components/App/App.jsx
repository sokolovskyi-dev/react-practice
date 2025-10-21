import { Component } from "react";
import SignupForm from "../SignupForm/SignupForm";
import Counter from "components/Counter/Counter";
import Clock from "components/Clock/Clock";

export class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <SignupForm />
        <Counter />
        <Clock />
      </div>
    );
  }
}
