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
import PlantFormContainer from './mobile/components/plant_form/plant_form_container';
import RequestFormContainer from './mobile/components/request_form/request_form_container';
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
         <View style={styles.layer}>
           <Image
             style={{
               height: 75,
               width: 300,
               top: -150,
               marginBottom: 15
             }}
             source={{uri: 'http://res.cloudinary.com/whasting/image/upload/v1491759462/logo_ewrsbw.png'}} />
           <View style={{
               width: 250,
               height: 100,
               top: -100,
               alignSelf: 'center'
             }}>
             <SessionFormContainer store={store} navigation={this.props.navigation}/>
            </View>
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
    return (
      <View style={{flex: 1}}>
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

class PlantFormScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <PlantFormContainer store={store} navigation={this.props.navigation}/>
      </View>
    );
  }
}

class RequestFormScreen extends React.Component {
  render() {
    return (
      <View style={styles.requestForm}>
        <RequestFormContainer store={store} navigation={this.props.navigation}/>
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
          color: 'white'
        },
        navigationBarStyle: {
          tintColor: 'white'
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
          color: 'white'
        },
        navigationBarStyle: {
          tintColor: 'white'
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
          color: 'white'
        },
        navigationBarStyle: {
          tintColor: 'white'
        }
      }
    }
  },
  Form: { screen: PlantFormScreen,
    navigationOptions: {
      title: 'Plantshare',
      header: {
        style: {
          backgroundColor: '#2E7D32'
        },
        titleStyle: {
          color: 'white'
        },
        navigationBarStyle: {
          tintColor: 'white'
        }
      }
    }
  },
  RequestForm: {
    screen: RequestFormScreen,
    navigationOptions: {
      title: 'Plantshare',
      header: {
        style: {
          backgroundColor: '#2E7D32'
        },
        titleStyle: {
          color: 'white'
        },
        navigationBarStyle: {
          tintColor: 'white'
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
          color: 'white'
        },
        navigationBarStyle: {
          tintColor: 'white'
        }
      }
    }
  }
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
  layer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  splashImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  requestForm: {
    flex: 1,
    backgroundColor: '#E8F5E9'
  },
  splashText: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 36
  }
});

AppRegistry.registerComponent('Plantshare', () => App);
