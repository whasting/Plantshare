'use strict';

import React, {StyleSheet, View, WebView, Component} from 'react-native';
import CookieManager from 'react-native-cookies';
import LoggedIn from './LoggedIn';

const LOGIN_URL = "http://localhost:3000/api/session";
const HOME_URL = "http://localhost:3000/";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'F5FCFF',
	}
});

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedIn: false,
			loadedCookie: false
		};
	}

	componentWillMount() {
		
	}
}