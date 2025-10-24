import { Component } from "react";
import SignupForm from "../SignupForm/SignupForm";
import Counter from "components/Counter/Counter";
import Counter1 from "components/Counter/Counter1";
// import Clock from "components/Clock/Clock";

export class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <SignupForm />
        <Counter />
        <Counter1 />

        {/* <Clock /> */}
      </div>
    );
  }
}
