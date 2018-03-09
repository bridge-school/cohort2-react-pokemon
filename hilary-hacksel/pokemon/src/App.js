import React, { Component } from 'react';
import { PokeCard } from './features/poke-card';
import { Input } from './components/input';
import { Button } from './components/button';
import { Header } from './components/header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
      name: '',
      imageUrl: '',
    };
  }

  fetchPokemon = event => {
    const data = fetch(
      `https://pokeapi.co/api/v2/pokemon/${this.state.searchTerm}`,
    )
      .then(response => response.json())
      .then(pokemonData => {
        this.setState({
          name: pokemonData.name,
          imageUrl: pokemonData.sprites.front_default,
        });
        return pokemonData;
      });

    console.log(data);
  };

  saveSearchTerm = event => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <div>
        <Header>Gotta Fetch 'em all</Header>
        <Input onInputChange={this.saveSearchTerm} />
        <Button potatoClick={this.fetchPokemon}>Search</Button>
        <PokeCard name={this.state.name} imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
