import { Component } from "react";
import { ToastContainer } from "react-toastify";
import PokemonForm from "components/PokemonForm";
import PokemonInfo from "components/PokemonInfo";

export class App extends Component {
  state = { pokemonName: "" };

  handleFormSubmit = (pokemonName) => {
    this.setState({ pokemonName });
  };

  render() {
    return (
      <div style={{ maxWidth: 1170, margin: "0 auto", padding: 20 }}>
        {/* {this.state.loading && <h1>Загружаем.....</h1>}
        {this.state.pokemon && <div>{this.state.pokemon.name}</div>} */}
        <PokemonForm onSubmit={this.handleFormSubmit} />
        <PokemonInfo pokemonName={this.state.pokemonName} />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
