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
      pokemon:""
    }
  }

  render() {
    return (
      <div>
        <Header title="Gotta Fetch em all!"/>
        <SearchBar placeholder="Search all Pokemon"/>
        <SearchButton/>
        <Display/>
        <Credit/>
      </div>
    );
  }
}

export default App;

https://pokeapi.co/api/v2/pokemon/butterfree
