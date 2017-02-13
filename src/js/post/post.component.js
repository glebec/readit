import React from 'react';

const boxed = {
	border: '1px solid',
	padding: '10px'
}

const Post = props => {

	const { post, upvotePost, downvotePost } = props;

	return (
		<div style={boxed}>
			<div style={boxed}>
				<button onClick={ () => downvotePost(post) }>Down</button>
				<span style={{ margin: '0px 5px' }}>{ post.score }</span>
				<button onClick={ () => upvotePost(post) }>Up</button>
			</div>
			<div style={boxed}>
				{ post.name }: { post.text }
			</div>
		</div>
	);
};

export default Post;
