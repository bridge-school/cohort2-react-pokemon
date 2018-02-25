import React, { Component } from 'react';
import './App.css';
import { Header } from './Components/header';
// import { Input } from './Components/input';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''}
  }

  handleChange = (event) => {
    this.setState({value: event.target.value})
  }

  handleSubmit = (event) => {
    alert(`An event was submitted with ${this.state.value}`);
    console.log(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <Header>Gotta Catch 'Em All!</Header>
        <form onSubmit={this.handleSubmit}>
            <label>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;
