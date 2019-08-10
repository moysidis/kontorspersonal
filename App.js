import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Linking} from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import RootNavigation from './navigation/RootNavigation';

import './constants/Registered.js';
 
export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
    dlPath:'', // deeplink path initialized
  };

  componentDidMount() {
    Linking.getInitialURL().then(url => {
      let { path, queryParams } = Expo.Linking.parse(url);
      if (path!=''){
        this.setState( {
          dlPath: path, // deeplink path is updated
        })
      }
    });
    Linking.addEventListener('url', this.handleOpenURL);
  }

componentWillUnmount() {
  Linking.removeEventListener('url', this.handleOpenURL);
}

handleOpenURL = (event) => {
  let { path, queryParams } = Expo.Linking.parse(event.url);
  if (path!=''){
    this.setState( {
      dlPath: path, // deeplink path is updated
    })
    this.child.navigateToMyAccount();
  }
} 

  render() {

    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
          <RootNavigation   
             ref={child => {this.child = child}} {...this.props}
             screenProps = {this.state.dlPath} // send deeplink path with screenProps
          />
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        //require('./assets/images/robot-dev.png'),
        //require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});