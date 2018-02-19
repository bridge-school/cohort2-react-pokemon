import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import InputSearch from './components/InputSearch'
import Button from './components/Button'
import PokemonDisplay from './components/PokemonDisplay'

// use this to fetch data
// const fetchPokemon = idOrName =>
//   fetch(`http://pokeapi.co/api/v2/pokemon/${idOrName}`)
//     .then(response => response.json())
//     .then(pokemonData => ({
//       name: pokemonData.name,
//       picture: pokemonData.sprites.front_default
//     }));

class App extends Component {
  constructor() {
    super()
    this.state = {
      search: "",
      pokemon: {
        name: "",
        picture: ""
      }
    }
  }

//  componentDidMount() {
   
//  }

  updateSearch = (event) => {
    this.setState({search: event.target.value });
  }

  // fetchPokemon = idOrName => {
  fetchPokemon = () => 
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.search}`)
      .then(response => response.json())
      .then(pokemonData => {
        let pokemon = ({
          name: pokemonData.name,
          picture: pokemonData.sprites.front_default
        })
        this.setState({pokemon: pokemon})
      })
      .catch( () => {
        console.log("error")
      } );


  render() {
    return (<div className="App">
      <Header data="Gotta Fetch em all!" />
      <div className="App-body">
        <div>
          <InputSearch updateSearch={this.updateSearch}/>
          <Button fetchPokemon={this.fetchPokemon}/>
        </div>
        <PokemonDisplay pokemonData={this.state.pokemon}/>
      </div>
    </div>);
  }
}

export default App;
 