import React from "react";
import { CardWrapper, Container, ProductName } from "./ProductList.styled";
import { Link } from "react-router-dom";

const ProductList = ({ products }) => {
  return (
    <Container>
      {products.map((product) => (
        <CardWrapper key={product.id}>
          <Link to={`${product.id}`}>
            <ProductName>{product.name}</ProductName>
          </Link>
        </CardWrapper>
      ))}
    </Container>
  );
};

export default ProductList;
