import React, { Component } from "react";
import "./App.css";
import Header from './components/Header'
import FilterInput from './components/FilterInput'
import FilterButton from './components/FilterButton'
import PokemonCard from './components/PokemonCard'

// use this to fetch data
const fetchPokemon = idOrName =>
  fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName}`)
    .then(response => response.json())
    .then(pokemonData => ({
      name: pokemonData.name,
      picture: pokemonData.sprites.front_default
    }));

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pokemonSelected: {
        name: '',
        picture: ''
      },
      filter: ''
    }
  }

  changeFilter = ev => this.setState({ filter: ev.target.value })
  getPokemon = (pokemon) => fetchPokemon(pokemon).then(result => this.setState({ pokemonSelected: result }))

  render() {
    const { name, picture } = this.state.pokemonSelected
    const { filter } = this.state

    return (
      <div>
        <Header title="Gotta Fetch em all!" />
        <FilterInput value={filter} onChange={this.changeFilter} />
        <FilterButton onClick={() => this.getPokemon(filter)} />
        <PokemonCard name={name} spriteSrc={picture} />
      </div>
    )
  }
}

export default App;
