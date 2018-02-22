import React from 'react';

export const SearchButton = ({children, onButtonClick}) => {
	return(
		<div>
			<button onClick={onButtonClick}>
				{children}
			</button>
		</div>
	);
}