import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import TextInput from './components/text-input';

class App extends Component {
  constructor(){
    super();
    this.state = {
      textInput:''
    }
  }

  updateTextField = (e) => {
    this.setState({textInput : e.target.value})
  };

  render() {
    return (
      <div className="App">
      <Header text={"Gotta Fetch em all!"}/>
      <TextInput updateTextField = {this.updateTextField}/>
      </div>
    );
  }
}

export default App;
