import React, { Component } from 'react';
import store from '../app/store';
import { login } from '../app/redux';
import Login from './login.component';

export default class LoginContainer extends Component {

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

	submitLogin (event) {
		event.preventDefault();
		const name = event.target.name.value;
		store.dispatch(login({ name }));
	}

	render () {
		const name = this.state.user.name;
		return <Login name={name} handleSubmit={this.submitLogin} />;
	}

}
