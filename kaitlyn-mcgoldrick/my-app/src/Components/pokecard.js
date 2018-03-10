import React from 'react';

export const PokeCard = ({name, picture}) => {
    return (
        <div>
            <p>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
            <img src={picture} alt=''/>
        </div>

    );
}
