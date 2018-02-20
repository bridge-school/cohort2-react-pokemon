import React from 'react';
import logo from '../logo.svg';

const Display = ({pokemon, error, term}) => {
	if (!pokemon) {

		if (error) {
			return(
				<div className="errorHandler">
					<p>Sorry, <strong>{term}</strong> is not a name in the Pokemon database. Please try typing in another name.</p>
				</div>
			) 
		}

		return(
			<div className="loader">
				<p>Loading...</p>
				<img className="loadingSpinner" src={logo} alt=""/>
			</div>
		) 

	}

	return (
		<div className="displayDetail">
			<img alt={pokemon.name} src={pokemon.sprites.front_default}/>
			<p>{pokemon.name}</p>
		</div>
	);
}

export default Display;