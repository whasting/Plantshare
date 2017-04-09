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

	componentWillReceiveProps(nextProps) {
    const { navigate } = this.props.navigation;
		if(nextProps.loggedIn){
      navigate('Index');
    }
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
    const { navigate } = this.props.navigation;
		return (
			<View>
				<TextInput
          placeholder="Username"
					onChangeText={(username) => this.setState({ username })}
        	value={this.state.username}
				/>
				<TextInput
          placeholder="password"
          secureTextEntry={true}
					onChangeText={(password) => this.setState({ password })}
        	value={this.state.password}
				/>
				<Button onPress={this.handleLogin}  title="Login!"/>
				<Button onPress={this.handleSignup}  title="Sign Up!"/>
			</View>
		);
	}

}

export default SessionForm;
