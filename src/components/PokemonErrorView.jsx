import React from "react";
import errorImage from "./error.jpg";

export const PokemonErrorView = ({ message }) => {
  return (
    <div role="alert">
      <img src={errorImage} width="240" alt="sadcat" />
      <p>{message}</p>
    </div>
  );
};
