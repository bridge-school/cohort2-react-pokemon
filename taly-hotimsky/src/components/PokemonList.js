import React, { Component } from 'react'

export default class PokemonList extends Component {
    render() {
        const { pokemonList } = this.props

        return (
            <div>
                <ul>
                    {pokemonList.map(item => <li key={item.name}>{item.name}</li>)}
                </ul>
            </div>
        )
    }
}
