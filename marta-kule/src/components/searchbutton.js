import React from 'react';

export const SearchButton = ({children, onButtonClick}) => {
	return(
		<div>
			<button className="SearchButton" onClick={onButtonClick}>
				{children}
			</button>
		</div>
	);
}