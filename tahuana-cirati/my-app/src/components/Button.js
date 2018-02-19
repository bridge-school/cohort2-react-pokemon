//import React, { Component } from 'react';
import React from 'react';

// class InputSearch extends Component {
//     render() {
//         return (
//             
//         )
//     }
// }

const Button = ( {fetchPokemon} ) => (
    <input className="Button" type='button' value='Search' onClick={() => fetchPokemon()}/>
    
)

export default Button;

