import React, { Component } from 'react';
import Header from "./components/header";
import Credit from "./components/credit";
import SearchBar from "./components/searchbar";
import SearchButton from "./components/searchbutton";
import Display from "./components/display";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term:"eevee",
      result:null,
      error:false
    }
    this.pokeSearch(this.state.term);
  }

  pokeSearch(term) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${term}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {this.setState({error:true})}
      })
      .then( result => {
        this.setState({result})
      console.log(result);
        } );
  }

  render() {
    return (
      <div>
        <Header title="Gotta Fetch em all!"/>
        <SearchBar
          placeholder="Search all Pokemon"
          />
        <SearchButton/>
        <Display 
          pokemon={this.state.result} 
          error={this.state.error} 
          term={this.state.term}/>
        <Credit/>
      </div>
    );
  }
}

export default App;

//
