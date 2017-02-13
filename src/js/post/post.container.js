import React, { Component } from 'react';
import store from '../app/store';
import { upvotePost, downvotePost } from '../app/redux';
import Post from './post.component';

export default class PostContainer extends Component {

	constructor (props) {
		super(props);
		this.state = store.getState();
		this.id = +this.props.params.id;
	}

	componentDidMount () {
		this.unsubscribe = store.subscribe(() => {
			this.setState(store.getState());
		});
	}

	componentWillUnmount () {
		this.unsubscribe();
	}

	submitUpvote (post) {
		store.dispatch(upvotePost(post));
	}

	submitDownvote (post) {
		store.dispatch(downvotePost(post));
	}

	render () {
		const thePost = this.state.posts.find(post => post.id === this.id);
		return (
			<Post
				post={ thePost }
				upvotePost={ this.submitUpvote }
				downvotePost={ this.submitDownvote }
			/>
		);
	}

}
