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

import configureStore from './mobile/store/store';

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
         onPress={() => navigate('Index')}
         title="See Plants"
       />
       <Button
         onPress={() => navigate('Detail')}
         title="See A Plant"
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
        <PlantIndexContainer store={store} />
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
