// webpack loaders
import '../index.html';
import 'purecss/build/pure-min.css';

// js libraries
import React from 'react';
import reactDOM from 'react-dom';

// own code
import App from './app';

console.log('Lovely to see you today');

reactDOM.render(
	<App />,
	document.getElementById('app')
);
