import React from 'react';
import { Link, withRouter } from 'react-router';

import {
  AppRegistry,
  ActivityIndicator,
  StyleSheet,
  Text,
	TextInput,
  View,
  Navigator,
  Button,
  TouchableHighlight,
	AsyncStorage,
  Alert
} from 'react-native';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", password: "", loading: false };
		this.handleLogin = this.handleLogin.bind(this);
		this.handleSignup = this.handleSignup.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.showErrors = this.showErrors.bind(this);
    this.showLoading = this.showLoading.bind(this);
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
    this.setState({loading: true });
	}

	handleSignup(e) {
		e.preventDefault();
		const user = this.state;
		this.props.signup(user);
    this.setState({loading: true });
	}

  showErrors(){
    if (this.props.errors.length !== 0){
      return ( Alert.alert(
            'Failed Request',
            'Invalid Username or Password',
            [
              {text: 'OK', onPress: () => {
                this.props.removeErrors();
                this.setState({loading: false });
              }}
            ]
          )
      );
    } else {
      return <Text></Text>;
    }
  }

  showLoading(){
    if(this.state.loading){
      return (
        <View>
          <ActivityIndicator
            style={[styles.centering]}
            color='white'
            size='large'
          />
        </View>
      );
    } else {
      return (<View></View>);
    }
  }

	navLink() {
		if (this.props.formType === "login") {
			return <Link to="/signup">sign up</Link>;
		} else {
			return <Link to="/login">log in</Link>;
		}
	}

  handleDemo() {
    const demoUsername = ['d', 'e', 'm', 'o'];
    const demoPassword = ['p', 'a', 's', 's', 'w', 'o', 'r', 'd'];
    let usernameFill = "";
    let passwordFill = "";
    let i = 0;

    let userFill = setInterval(() => {
      usernameFill += demoUsername[i];
      i++;
      this.setState({username: usernameFill});

      if (demoUsername.length === i) {
        clearInterval(userFill);
        i = 0;

        let passFill = setInterval(() => {
          passwordFill += demoPassword[i];
          i++;
          this.setState({password: passwordFill});

          if (demoPassword.length === i) {
            const user = this.state;
            setTimeout(() => {
              this.props.login(user);
              this.setState({loading: true });
            }, 120);
            clearInterval(passFill);
          }
        }, 50);
      }
    }, 75);
  }

	render() {
    const { navigate } = this.props.navigation;

		return (
			<View style={{flex: 1}}>
        { this.showErrors() }

				<TextInput
          placeholder="Username"
          style={styles.textFields}
          underlineColorAndroid='rgba(0,0,0,0)'
					onChangeText={(username) => this.setState({ username })}
        	value={this.state.username}
				/>
				<TextInput
          placeholder="Password"
          style={styles.textFields}
          underlineColorAndroid='rgba(0,0,0,0)'
          secureTextEntry={true}
					onChangeText={(password) => this.setState({ password })}
        	value={this.state.password}
				/>
        <View style={styles.loginSignup}>
          <View style={styles.buttonBorder}>
      			<Button
              onPress={this.handleLogin}
              title="Login"/>
          </View>
          <View style={styles.buttonBorder}>
      			<Button
              onPress={this.handleSignup}
              title="Sign Up"
              color='purple'/>
          </View>
        </View>
        <View style={styles.demoButton}>
          <Button
            onPress={this.handleDemo}
            title="Demo"
            color='#4CAF50'/>
        </View>
        { this.showLoading() }
			</View>
		);
	}
}

const styles = StyleSheet.create({
  textFields: {
    height: 40,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    fontSize: 16
  },
  loginSignup: {
    flex: 0,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    flexDirection: 'row'
  },
  demoButton: {
    marginTop: 30,
    borderWidth: 1.5,
    borderColor: 'black'
  },
  buttonBorder: {
    flex: 1,
    marginRight: 4,
    borderWidth: 1.5,
    borderColor: 'black'
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  gray: {
    backgroundColor: '#cccccc',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8,
  },
});

export default SessionForm;
