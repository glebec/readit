// import React, { Component } from 'react';
// import store from '../app/store';
import { upvotePost, downvotePost } from '../app/redux';
import Post from './post.component';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
	post: state.posts.find(post => post.id === +ownProps.params.id)
});

// const mapDispatchToProps = (dispatch) => ({
// 	upvotePost: post => dispatch(upvotePost(post)),
// 	downvotePost: post => dispatch(downvotePost(post))
// });

// This is an alternate form (object form) which you can use if you have
// action creators with the same name as the props the component needs.
// Func name doesn't matter — only that it's used as the second param.

const makeDispatcherFunctionsForOurCompProps = {
	upvotePost,
	downvotePost
};

export default connect(mapStateToProps, makeDispatcherFunctionsForOurCompProps)(Post);

/*export default class PostContainer extends Component {

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

}*/
