import React, { Component } from 'react';
import './App.css';
import { Header } from './Components/header';
import { PokeCard } from './Components/pokecard';
import Form from './Components/form';
const fetch = require('node-fetch');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      picture: ''
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit = (name) => {
    this.fetchPokemon(name);
  }

  fetchPokemon = (idOrName) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName}`)
    .then((res) => res.json())
    .then(res => {
        this.setState({
          name: res.name.charAt(0).toUpperCase() + res.name.slice(1),
          picture: res.sprites && res.sprites.front_default
        });
    });
  }

  render() {
    return (
      <div className="App">
        <Header>Gotta Catch 'Em All!</Header>
        <Form handleFormSubmit={this.handleFormSubmit}/>
        <PokeCard name={this.state.name} picture={this.state.picture}/>
      </div>
    );
  }
}

export default App;
