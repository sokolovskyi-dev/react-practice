import { Component } from "react";
import SignupForm from "../SignupForm/SignupForm";
import Counter from "components/Counter/Counter";

export class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <SignupForm />
        <Counter />
      </div>
    );
  }
}
