import React from 'react';

export const PokeCard = ({name, picture}) => {
    return (
        <div>
            <p>{name}</p>
            <img src={picture} alt=''/>
        </div>

    );
}
