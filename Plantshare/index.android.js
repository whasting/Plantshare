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
      tintColor: {
        backgroundColor:'white'
      }
    };
    return (
      <View>
        <PlantIndexContainer store={store} />
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
    return (
      <View style={styles.navbar}>
        <PlantDetailContainer store={store} />
      </View>
    );
  }
}

const AppNavigator = StackNavigator({
  Index: { screen: IndexScreen,
    navigationOptions: {
      title: 'Index',
      header: {
        style: {
          backgroundColor: '#4CAF50'
        },
        titleStyle: {
          color: 'white',
          alignSelf: 'center'
        }
      }
    }
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Plantshare',
      header: {
        style: {
          backgroundColor: '#4CAF50'
        },
        titleStyle: {
          color: 'white',
          alignSelf: 'center'
        }
      }
    }
  },
  Login: { screen: LoginScreen },
  Detail: { screen: DetailScreen }
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
