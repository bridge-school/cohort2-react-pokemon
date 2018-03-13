import React, { Component } from 'react';
import { connect } from 'react-redux';


class PokemonDisplay extends Component {
    render() {
        return (
            <div className="PokemonDisplay">
                <div className="Labels">Name:</div> 
                <div className="NameDetails">{this.props.pokemonList.name}</div>
                <div className="Labels">Picture:</div> 
                <div className="PictureDetails"> <img className="PictureSize" src={this.props.pokemonList.picture} /></div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    pokemonList: state.pokemonList
})
      
export default connect(mapStateToProps)(PokemonDisplay);


