import React from 'react';
import { Link } from 'react-router-dom';

const linkData = [
	{path: '/posts', text: 'Home'},
	{path: '/write', text: 'Write'}
];

const pureMenuItem = data => (
	<li className="pure-menu-item" key={data.path}>
		<Link to={data.path} className="pure-menu-link">{data.text}</Link>
	</li>
);

const links = linkData.map(pureMenuItem);

const Nav = () => (
	<div className="pure-menu pure-menu-horizontal">
		<ul className="pure-menu-list">
			{ links }
		</ul>
	</div>
);

export default Nav;
