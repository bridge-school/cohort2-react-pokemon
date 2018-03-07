import React, { Component } from 'react'

export default class PokemonList extends Component {
    render() {
        const { pokemonList, getPokemonDetails } = this.props

        return (
            <div>
                <ul>
                    {pokemonList.map(item =>
                        <li key={item.name}>
                            <a onClick={() => getPokemonDetails(item.name)}>
                                {item.name}
                            </a>
                        </li>)}
                </ul>
            </div>
        )
    }
}
