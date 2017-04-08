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

export default class NavAllDay extends Component {
  render() {
  const routes = [
    {title: 'Login', index: 0},
    {title: 'Index', index: 1},
  ];

  const navigationOptions = {
    title: 'Welcome',
  };
  const { navigate } = this.props.navigation;

  StackNavigator({
    Home: { screen: HomeScreen },
    Login: { screen: LoginScreen },
    Index: { screen: IndexScreen },
    Detail: { screen: DetailScreen }
  });

  return (
    <Navigator
      initialRoute={routes[0]}
      initialRouteStack={routes}
      renderScene={(route, navigator) =>
        <TouchableHighlight onPress={() => {
          if (route.index === 0) {
            navigate('Login');
          } else if(route.index === 1) {
            navigate('Index');
          }
        }}>
        <Text>Hello {route.title}!</Text>
        </TouchableHighlight>
      }
      style={{padding: 100}}
    />
  );
}
}

class HomeScreen extends React.Component {
 render() {
   const navigationOptions = {
     title: 'Welcome',
   };
   const { navigate } = this.props.navigation;
   return (
     <View>
       <Text>Hello, Plantshare!</Text>
       <Button
         onPress={() => navigate('Index')}
         title="See Plants"
       />
       <Button
         onPress={() => navigate('Detail')}
         title="See A Plant"
       />
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
    };
    return (
      <View>
        <PlantIndexContainer store={store}/>
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
        <SessionFormContainer store={store} />
      </View>
    );
  }
}

class DetailScreen extends React.Component {
  render() {
    const navigationOptions = {
      title: 'Plant',
    };
    return (
      <View>
        <PlantDetailContainer store={store} />
      </View>
    );
  }
}

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Login: { screen: LoginScreen },
  Index: { screen: IndexScreen },
  Detail: { screen: DetailScreen }
});

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
});

AppRegistry.registerComponent('Plantshare', () => App);
