import React from 'react';
import Nav from './nav';
import LoginContainer from '../login';

const App = props => (
	<div style={{ padding: '20px' }}>
		<h1>Read·It</h1>
		<LoginContainer />
		<Nav />
		{ props.children || null }
	</div>
);

export default App;
