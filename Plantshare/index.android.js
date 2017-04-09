'use strict';

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  Button,
  Image,
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
     <View style={styles.splash}>
       <Image
         style={styles.splashImage}
         source={{uri: 'http://i.imgur.com/gVsGBmq.jpg'}}>
         <Image
           style={{
             height: 75,
             width: 300,
             top: -150,
             marginBottom: 15
           }}
           source={{uri: 'http://i.imgur.com/BnuV3N9.png'}} />
         <View style={{
             width: 250,
             height: 40,
             top: -75,
             alignSelf: 'center',
             borderColor: '#004D40',
             borderWidth: 3,
             borderRadius: 5
           }}>
           <Button
              onPress={() => navigate('Login')}
              color='#43A047'
              title="Get Started"
            />
          </View>
      </Image>
     </View>
   );
 }
}

class IndexScreen extends React.Component {
  render() {
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
          height: 0
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
          backgroundColor: '#2E7D32'
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
          backgroundColor: '#2E7D32'
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
          backgroundColor: '#2E7D32'
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
  splash: {
    flex: 1
  },
  splashImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  navbar: {
    backgroundColor: 'white'
  },
  splashText: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 36
  }
});

AppRegistry.registerComponent('Plantshare', () => App);
