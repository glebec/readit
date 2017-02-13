import React, { Component } from 'react';
import store from '../app/store';
import Posts from './posts.component';

export default class PostsContainer extends Component {

	constructor (props) {
		super(props);
		this.state = store.getState();
	}

	componentDidMount () {
		this.unsubscribe = store.subscribe(() => {
			this.setState(store.getState());
		});
	}

	componentWillUnmount () {
		this.unsubscribe();
	}

	render () {
		const posts = this.state.posts;
		return <Posts posts={posts} />;
	}

}
