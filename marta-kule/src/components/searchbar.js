import React from 'react';

const SearchBar = (props) => {
	return (
		<div>
			<input placeholder = {props.placeholder}/>
		</div>
	);
}

export default SearchBar;