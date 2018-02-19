import React, { Component } from 'react';

class PokemonDisplay extends Component {
    
    render() {
        return (
            <div className="App">
                <div>{this.props.pokemonData.name}</div>
                <div><img src={this.props.pokemonData.picture} /></div>
            </div>
        )
    }
}


export default PokemonDisplay;

