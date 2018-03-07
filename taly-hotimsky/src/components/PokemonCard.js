import React, { Component } from 'react'

export default class PokemonCard extends Component {
    render() {
        const { name, spriteSrc } = this.props

        return (
            <div>
                <p>{name}</p>
                <img src={spriteSrc} alt={name} />
            </div>
        )
    }
}
