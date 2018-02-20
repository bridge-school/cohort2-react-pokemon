import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import TextInput from './components/text-input';
import Button from './components/button';
import Pokemon from './components/pokemon-card';
import _ from 'lodash';

class App extends Component {
  constructor(){
    super();
    this.state = {
      textInput:'',
      pokemon: {}
    }
  }

  updateTextField = (e) => {
    this.setState({textInput : e.target.value})
  };

  getPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.textInput}`)
    .then((res) => res.json())
    .catch(err => console.log(err))
    .then((data) => this.setState({pokemon:data}))
  };
  render() {
    return (
      <div className="App">
      <Header text={"Gotta Fetch em all!"}/>
      <TextInput updateTextField = {this.updateTextField} label = {"Enter Pokemon name or id:"}/>
      <Button text ={"Get Pokemon"} onClick = {this.getPokemon}/>
      { _.isEmpty(this.state.pokemon) ? null : <Pokemon pokemon = {this.state.pokemon}/>}
      </div>
    );
  }
}

export default App;
