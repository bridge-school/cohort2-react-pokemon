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
      picture: '',
      error: ''
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit = (name) => {
    this.fetchPokemon(name);
  }

  fetchPokemon = (idOrName) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName}`)
    .then(res => {
      console.log(res.status);
      if (res.status >= 200 && res.status < 400) {
        return res;
    } else {
      var err = new Error("We can't seem to find a pokemon with that name or number.")
      throw err;
    }
    })
    .then(res => res.json())
    .then(res => {
      return this.setState({
        name: res.name,
        picture: res.sprites && res.sprites.front_default,
        error: ''
      });
    })
    .catch(err => {
        this.setState({ 
          name: '',
          picture: '',
          error: err.message
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Header>Gotta Catch 'Em All!</Header>
        <Form handleFormSubmit={this.handleFormSubmit}/>
        <PokeCard name={this.state.name} picture={this.state.picture}/>
        <div className="error-text">
          {this.state.error}
        </div>
      </div>
    );
  }
}

export default App;
