import React from 'react';
import { Link, withRouter } from 'react-router';

import {
  AppRegistry,
  StyleSheet,
  Text,
	TextInput,
  View,
  Navigator,
  Button,
  TouchableHighlight,
	AsyncStorage
} from 'react-native';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", password: "" };
		this.handleLogin = this.handleLogin.bind(this);
		this.handleSignup = this.handleSignup.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleLogin(e) {
		e.preventDefault();
		const user = this.state;
		this.props.login(user);
	}

	handleSignup(e) {
		e.preventDefault();
		const user = this.state;
		this.props.signup(user);
	}

	navLink() {
		if (this.props.formType === "login") {
			return <Link to="/signup">sign up</Link>;
		} else {
			return <Link to="/login">log in</Link>;
		}
	}

	render() {
		return (
			<View>
				<TextInput
					onChangeText={(username) => this.setState({ username })}
        	value={this.state.username}
				/>
				<TextInput
					onChangeText={(password) => this.setState({ password })}
        	value={this.state.password}
				/>
				<Button onPress={this.handleLogin}  title="Login Here!"/>
				<Button onPress={this.handleSignup}  title="Signup Here!"/>
			</View>
		);
	}

}

export default SessionForm;
