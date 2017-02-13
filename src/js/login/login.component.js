import React from 'react';

const Login = props => (
	<form className="pure-form" onSubmit={ props.handleSubmit }>
		<fieldset>
			<legend>You are logged in as { props.name }</legend>

			<input name="name" placeholder="Name" />

			<button type="submit" className="pure-button pure-button-primary">Login</button>
		</fieldset>
	</form>
);

export default Login;
