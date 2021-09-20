import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/' activeStyle>
			Home
		</NavLink>
		<NavLink to='/aboutus' activeStyle>
			About Us
		</NavLink>
		<NavLink to='/appdevelopment' activeStyle>
			App Development
		</NavLink>
		<NavLink to='/webdevelopment' activeStyle>
			Web Development
		</NavLink>
		<NavLink to='/contactus' activeStyle>
			Contact US 
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
