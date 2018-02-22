import React from 'react';
import loader from '../pokeball.svg';
import {Header} from "./header"

export const Display = ({name, imageUrl, error, loading}) => {

	if (loading) {
		return (
			<div className="loader"> 
				<Header>Loading...</Header>
				<img src={loader} className="loadingSpinner"/> 
			</div>
		);
	}

	if (error) {
		return(
			<div className="errorHandler">
				Sorry, either the network is down or <strong>&#8220;{error}&#8221;</strong> is not a name/id in the Pokemon database. Type in another name or id from 1 to 802.
			</div>
		) 
	}

	return (
		<div className="displayDetail">
			<Header><span className="Capital">{name}</span></Header>
			<img src={imageUrl} alt={name}/>
		</div>
	);
}