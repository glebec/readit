import React from 'react';
import Nav from './nav';
import LoginContainer from '../login';

const Header = () => (
	<div style={{ padding: '20px' }}>
		<h1>Read·It</h1>
		<LoginContainer />
		<Nav />
	</div>
);

export default Header;
