import React from "react";
// import { Link, Container, Header, Logo } from "./App.styled";
import { Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import About from "pages/About";
import Products from "pages/Products";
import ProductDetails from "pages/ProductDetails";
import SharedLayout from "components/SharedLayout/SharedLayout";
import { Mission } from "components/Mission";
import { Team } from "components/Team";
import { Reviews } from "components/Reviews";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
};

export default App;
