import React, { Component } from 'react';
import {Header} from "./components/header"
import {SearchBar} from "./components/searchbar"
import {SearchButton} from "./components/searchbutton"
import {Display} from "./components/display"

class App extends Component {

  constructor() {
    super();
    this.state={
      searchTerm:"",
      name:"",
      imageUrl:"",
      error:null
    };
  }

  saveSearchTerm = e => this.setState({searchTerm:(e.target.value)});

  pokeSearch = e => {
    let term = this.state.searchTerm.toLowerCase().trim();

    if (term.length>0){
      fetch(`https://pokeapi.co/api/v2/pokemon/${term}`)
      .then((response) => {return response.json();})
      .then(data => {
        if (!data===undefined) {
          this.setState({
            name: data.name,
            imageUrl: data.sprites.front_default,
          });          
        } else {this.setState({error:true});}
      });      
    }
  }

  render() {
    return (
      <div className="App">
        <Header>Gotta Fetch 'em all!</Header>
        <SearchBar 
          placeholder="enter lowercase name or id from 1 to 802"
          inputValue={this.state.searchTerm}
          onInputChange={this.saveSearchTerm}/>
        <SearchButton onButtonClick={this.pokeSearch}>Search</SearchButton>
        <Display 
          error={this.state.error}
          term = {this.state.searchTerm}
          name={this.state.name}
          imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;