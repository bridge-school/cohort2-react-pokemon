import React from 'react';

const FilterButton = ({ onClick, children }) => {
    return (
        <button onClick={onClick}>{children}</button>
    );
};

export default FilterButton;
