import { Layout } from "components/Layout";
import DogDetails from "pages/DogDetails";
import Dogs from "pages/Dogs";
import Home from "pages/Home";
import { Component } from "react";
// import SignupForm from "../SignupForm/SignupForm";
// import Counter from "components/Counter/Counter";
// import Counter1 from "components/Counter/Counter1";
// import UserMenu from "components/UserMenu/UserMenu";
import { Route, Routes } from "react-router-dom";
// import Clock from "components/Clock/Clock";

export class App extends Component {
  state = {};

  render() {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dogs" element={<Dogs />} />
          <Route path="dogs/:dogId" element={<DogDetails />} />
        </Route>
      </Routes>
    );
  }
}
