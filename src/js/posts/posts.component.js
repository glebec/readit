import React from 'react';
import { Link } from 'react-router';

const Posts = props => (
	<table className="pure-table pure-table-horizontal">
		<thead>
			<tr>
				<th>Score</th>
				<th>Author</th>
			</tr>
		</thead>
		<tbody>
			{props.posts.map(post => (
				<tr key={post.id}>
					<td>{ post.score }</td>
					<td><Link to={`/posts/${post.id}`}>{ post.name }</Link></td>
				</tr>
			))}
		</tbody>
	</table>
);

export default Posts;
