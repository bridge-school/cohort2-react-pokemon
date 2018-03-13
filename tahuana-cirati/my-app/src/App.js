import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import InputSearch from './components/InputSearch';
import Button from './components/Button';
import PokemonDisplay from './components/PokemonDisplay';


class App extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      pokemon: {
        name: "",
        picture: ""
      }
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.fetchPokemon = this.fetchPokemon.bind(this);
  }

  // Custom functions
  updateSearch = (event) => {
    this.setState({search: event.target.value });
  }

  handleKeyDown(event) {
    if (event.key === "Enter"){
        this.fetchPokemon();
    }
  }

  fetchPokemon = () => 
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.search}`)
      .then(response => response.json())
      .then(pokemonData => {
        this.setState({pokemon: {
          name: pokemonData.name,
          picture: pokemonData.sprites.front_default
        }})
      })
      .catch( () => {
        alert("ops... error")
      } );

  render() {
    return (<div className="App" >
      <Header data="Gotta Fetch em all!" />
      <div className="App-body">
        <div>
          <InputSearch updateSearch={this.updateSearch} onKeyDown={this.handleKeyDown} />
          <Button fetchPokemon={this.fetchPokemon}/>
        </div>
        <PokemonDisplay pokemonData={this.state.pokemon}/>
      </div>
    </div>);
  }
}

export default App;
 