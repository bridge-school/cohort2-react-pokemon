import React, { Component } from "react";
import "./App.css";
import Header from './components/Header'
import FilterInput from './components/FilterInput'
import FilterButton from './components/FilterButton'
import PokemonCard from './components/PokemonCard'
import PokemonList from "./components/PokemonList";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pokemonSelected: {
        name: '',
        picture: ''
      },
      filter: '',
      pokemonList: {}
    }
  }

  changeFilter = ev => this.setState({ filter: ev.target.value })

  getPokemon = pokemon => this.fetchPokemon(pokemon).then(
    result => {
      if (result) {
        if (result.pokemonList) {
          this.setState({ pokemonSelected: {}, pokemonList: result.pokemonList })
        }
        else {
          this.setState({ pokemonSelected: result, filter: result.name })
        }
      }
    });

  fetchPokemon = idOrName =>
    fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName && idOrName}`)
      .then(response => response.json())
      .then(
        pokemonData => (pokemonData.name ?
          ({
            name: pokemonData.name,
            picture: pokemonData.sprites.front_default
          }) :
          ({ pokemonList: pokemonData.results })
        ))
      .catch(error => this.handleError(error))

  handleError = error => console.log("ERROR: ", error.message);

  render() {
    // console.log("on render", JSON.stringify(this.state));
    const { filter, pokemonSelected, pokemonList } = this.state

    let data;
    if (pokemonSelected.name) {
      data = <PokemonCard name={pokemonSelected.name} spriteSrc={pokemonSelected.picture} />
    }
    else if (pokemonList.length > 0) {
      data = <PokemonList pokemonList={pokemonList} getPokemonDetails={pokemon => this.getPokemon(pokemon)} />
    }

    return (
      <div>
        <Header title="Gotta Fetch em all!" />
        <FilterInput value={filter} onChange={this.changeFilter} />
        <FilterButton onClick={() => this.getPokemon(filter)}>Get!</FilterButton>
        {data}
      </div>
    )

  }
}

export default App;
