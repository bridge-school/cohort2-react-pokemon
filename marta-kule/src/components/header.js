import React from 'react';
import logo from '../logo.svg';

const Header = ({title}) => {
	return (
		<div>
			<h1>{title}</h1>
		  <div className="bounce">
		    <img className="logo spin" src={logo} alt="Page logo, Pokeball"/>
		  </div>
		 </div>
	)
}

export default Header;

