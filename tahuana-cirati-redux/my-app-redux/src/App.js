import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Header from './components/Header';
import updateHeaderAction from './actions/header-action';

class App extends Component {
  
  componentDidMount() {
    this.props.updateHeader('Gotta Fetch em all!');
  }

  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  header: state.header,
  inputSearch: state.inputSearch,
  pokemonList: state.pokemonList
})

const mapDispatchToProps = {
  updateHeader: updateHeaderAction
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
