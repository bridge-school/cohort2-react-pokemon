import React from 'react';

const Button = ( {fetchPokemon} ) => (
    <input className="Button" type='button' value='Search' onClick={() => fetchPokemon()} />
);

export default Button;

