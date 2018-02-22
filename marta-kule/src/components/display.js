import React from 'react';
import loader from '../pokeball.svg';
import {Header} from "./header"

export const Display = ({name, imageUrl, error, term}) => {

	if (error) {
		return(
			<div className="errorHandler">
				<p>Sorry, <strong>{term}</strong> is not a name in the Pokemon database. Please try typing in another name.</p>
			</div>
		) 
	}

	return (
		<div className="displayDetail">
			<Header>{name}</Header>
			<img src={imageUrl} alt={name}/>
		</div>
	);
}