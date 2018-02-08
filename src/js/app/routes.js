import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import App from './app';
import PostsContainer from '../posts';
import PostContainer from '../post';
import Write from '../write';

const Routes = () => (
	<Router>
		<div>
			<App />
			<Switch>
				<Route exact path="/posts" component={PostsContainer} />
				<Route exact path="/posts/:id" component={PostContainer} />
				<Route exact path="/write" component={Write} />
				<Redirect to="/posts" />
			</Switch>
		</div>
	</Router>
);

export default Routes;
