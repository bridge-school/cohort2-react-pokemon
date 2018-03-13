import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchPokemonAction from '../actions/button-actions';


class Button extends Component {
    onClickSearch() {
        this.props.onClickSearch(this.props.inputSearch)
    }

    render() {
        return (
            <input className="Button" type='button' value='Search' onClick={() => this.onClickSearch()} />
        )
    }
}

const mapStateToProps = store => { 
    return ({
    inputSearch: store.inputSearch
  })}
  
const mapDispatchToProps = {
    onClickSearch: fetchPokemonAction
  } 
  
export default connect(mapStateToProps, mapDispatchToProps)(Button);




