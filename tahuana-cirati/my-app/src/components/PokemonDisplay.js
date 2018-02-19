import React, { Component } from 'react';

class PokemonDisplay extends Component {
    render() {
        return (
            <div className="PokemonDisplay">
                <div className="Labels">Name:</div> 
                <div className="NameDetails">{this.props.pokemonData.name}</div>
                <div className="Labels">Picture:</div> 
                <div className="PictureDetails"> <img className="PictureSize" src={this.props.pokemonData.picture} /></div>
            </div>
        )
    }
}


export default PokemonDisplay;

