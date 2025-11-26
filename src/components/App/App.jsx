import React from "react";
import { Link, Container, Header, Logo } from "./App.styled";
import { Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import About from "pages/About";
import Products from "pages/Products";
import ProductDetails from "pages/ProductDetails";

const App = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
            💻
          </span>{" "}
          GoMerch Store
        </Logo>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>
      </Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </Container>
  );
};

export default App;
