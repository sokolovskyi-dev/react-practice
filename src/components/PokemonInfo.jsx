import { Component } from "react";

export default class PokemonInfo extends Component {
  state = { pokemon: null, loading: false, error: null };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.pokemonName !== this.props.pokemonName) {
      this.setState({ loading: true });
      fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error(`Нет покемона с именем ${this.props.pokemonName}`)
          );
        })
        .then((pokemon) => this.setState({ pokemon }))
        .catch((error) => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }
  render() {
    const { pokemon, loading, error } = this.state;
    const { pokemonName } = this.props;
    return (
      <div>
        {error && <h1>{error.message}</h1>}
        {loading && <div>Загружаем...</div>}
        {!pokemonName && <div>Введите имя покемона</div>}
        {pokemon && (
          <div>
            <p>{pokemon.name}</p>
            <img
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt=""
              width="300"
            />
          </div>
        )}
      </div>
    );
  }
}
