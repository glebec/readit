import React from 'react';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import App from './app';
import PostsContainer from '../posts';
import PostContainer from '../post';
import Write from '../write';

const Routes = () => (
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRedirect to="/posts" />
			<Route path="/posts" component={PostsContainer} />
			<Route path="/posts/:id" component={PostContainer} />
			<Route path="/write" component={Write} />
		</Route>
	</Router>
);

export default Routes;
