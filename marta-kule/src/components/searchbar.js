import React from 'react';

export const SearchBar = ({onInputChange, inputValue, placeholder}) => {
	return(
			<input className="searchBar" onChange={onInputChange} value={inputValue} placeholder={placeholder}/>
	);
}