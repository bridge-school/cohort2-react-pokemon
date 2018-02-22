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
      error:null,
      loading:false
    };
  }

  saveSearchTerm = e => this.setState({searchTerm:(e.target.value)});

  pokeSearch = e => {
      let rawInput = this.state.searchTerm;
      let term = rawInput.toLowerCase().trim();

    if (term.length>0){

      this.setState({
        error:null,
        loading:true
      });

      fetch(`https://pokeapi.co/api/v2/pokemon/${term}`)
      .then((response) => {
        this.setState({loading:false});        
        return response.json();
      })
      .then(data => {
          this.setState({
            name: data.name,
            imageUrl: data.sprites.front_default,
          });          
      })
      .catch(err=>{
        this.setState({error:rawInput});
      });      
    }
  }

  render() {
    return (
      <div className="App">
        <Header>Gotta Fetch 'em all!</Header>
        <SearchBar 
          placeholder="Enter name or id from 1 to 802"
          inputValue={this.state.searchTerm}
          onInputChange={this.saveSearchTerm}/>
        <SearchButton onButtonClick={this.pokeSearch}>Search</SearchButton>
        <Display 
          loading={this.state.loading}
          error={this.state.error}
          name={this.state.name}
          imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;