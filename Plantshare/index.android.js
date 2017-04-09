'use strict';

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  Button,
  TouchableHighlight
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import { Provider } from 'react-redux';

import PlantIndexContainer from './mobile/components/plants/plant_index_container';
import PlantDetailContainer from './mobile/components/plant_detail/plant_detail_container';
import SessionFormContainer from './mobile/components/session_form/session_form_container';

import configureStore from './mobile/store/store';

let store = configureStore();

class HomeScreen extends React.Component {
 render() {
   const { navigate } = this.props.navigation;
   return (
     <View>
       <Text>Hello, Plantshare!</Text>
       <Button
          onPress={() => navigate('Login')}
          title="Login Here!"
        />
     </View>
   );
 }
}

class IndexScreen extends React.Component {
  render() {
    const navigationOptions = {
      title: 'Plants',
      tintColor: {
        backgroundColor:'white'
      }
    };
    return (
      <View style={{flex: 1}}>
        <PlantIndexContainer store={store} navigation={this.props.navigation}/>
      </View>
    );
  }
}

class LoginScreen extends React.Component {
  render() {
    const navigationOptions = {
      title: 'Login',
    };
    return (
      <View>
        <SessionFormContainer store={store} navigation={this.props.navigation}/>
      </View>
    );
  }
}

class DetailScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <PlantDetailContainer store={store} navigation={this.props.navigation}/>
      </View>
    );
  }
}

const AppNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Plantshare',
      header: {
        style: {
          backgroundColor: '#388E3C'
        },
        titleStyle: {
          color: 'white',
          alignSelf: 'center'
        }
      }
    }
  },
  Login: { screen: LoginScreen,
    navigationOptions: {
      title: 'Plantshare',
      header: {
        style: {
          backgroundColor: '#388E3C'
        },
        titleStyle: {
          color: 'white',
          alignSelf: 'center'
        }
      }
    }
  },
  Index: { screen: IndexScreen,
    navigationOptions: {
      title: 'Plantshare',
      header: {
        style: {
          backgroundColor: '#388E3C'
        },
        titleStyle: {
          color: 'white',
          alignSelf: 'center'
        }
      }
    }
  },
  Detail: { screen: DetailScreen,
    navigationOptions: {
      title: 'Plantshare',
      header: {
        style: {
          backgroundColor: '#388E3C'
        },
        titleStyle: {
          color: 'white',
          alignSelf: 'center'
        }
      }
    } }
});

class App extends React.Component {
  render() {
    return (
      <AppNavigator style={styles.navbar} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  hello: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  navbar: {
    backgroundColor: 'white'
  }
});

AppRegistry.registerComponent('Plantshare', () => App);
