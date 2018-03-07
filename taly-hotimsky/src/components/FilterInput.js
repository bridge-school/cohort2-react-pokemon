import React from 'react';

const Filter = props => {
    const { value, onChange } = props

    return (
        <input type="text" value={value} onChange={onChange}></input>
    );
};

export default Filter;