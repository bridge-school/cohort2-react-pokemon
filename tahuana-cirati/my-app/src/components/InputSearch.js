import React from 'react';

const InputSearch = ( {updateSearch, onKeyDown}) => (
        <input className="Input" type='text' name='name' placeholder='Search your Pokemon by name or ID...' onChange={(event) => updateSearch(event)} onKeyDown={(event) => onKeyDown(event)}  />
);

export default InputSearch;

