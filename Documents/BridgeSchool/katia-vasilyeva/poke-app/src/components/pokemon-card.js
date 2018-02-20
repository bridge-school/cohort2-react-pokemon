import React from 'react';

const Pokemon = ({pokemon}) => {
    let {forms, sprites} = pokemon;
    return (
    <div> 
        <h2> {forms[0].name} </h2>
        <img src={ sprites.front_default }/>
    </div> 
    );
};

export default Pokemon;