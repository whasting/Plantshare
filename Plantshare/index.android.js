'use strict';

import React from 'react';

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

import PlantIndexContainer 
  from './mobile/components/plants/plant_index_container';

import configureStore from './mobile/store/store';

import Login from './mobile/components/login/Login';

export default class ReactNativeCommonScreens extends React.Component {
  render() {
    return (
      <Login />
    );
  }
}

let store = configureStore();

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
         onPress={() => navigate('Chat')}
         title="See Plants"
       />
     </View>
   );
 }
}

class ChatScreen extends React.Component {
  render() {
    const navigationOptions = {
      title: 'Plants',
    };
    return (
      <View>
        <PlantIndexContainer store={store} />
      </View>
    );
  }
}

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
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