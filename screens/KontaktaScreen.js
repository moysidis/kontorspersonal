import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  WebView,
  View,
  StatusBar,
} from 'react-native';
import { Feather, Entypo } from '@expo/vector-icons';

export default class KontaktaScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  static navigationOptions = ({navigation}) => {
  return {
    title: 'Kontakta oss',
    headerLeft: (
      <TouchableOpacity style={{ marginLeft: 15 }} onPress={() => navigation.openDrawer()}>
        <Feather name="menu" size={35} color="#483148" />
      </TouchableOpacity>),
    headerRight: (
        <TouchableOpacity style={{ marginRight: 15 }} onPress = {() => navigation.state.params.handleBack()}>
          {(navigation.state.params && navigation.state.params.canGoBack) &&
            <Entypo name="back" size={40} color="#483148" />
          }
        </TouchableOpacity>
      )
  };
};
  
  componentDidMount() {
    this.props.navigation.setParams({ canGoBack: false });
    this.props.navigation.setParams({ handleBack: this.onBack });
  }

render() {
    let cssCode = `
        document.querySelector('.header').style.display = 'none';
    `;
    return(
      <View style={ { flex: 1 } }>
        <StatusBar
            hidden={false}
        />
         <WebView
                 ref={refForBack => { this.referencedWebview = refForBack; }}
                 style={{ flex:1 }}
                 automaticallyAdjustContentInsets={ false }
                 source={ { uri: 'https://www.kontorspersonal.se/kontakta-oss' } }
                 javaScriptEnabled={ true }
                 domStorageEnabled={ true }
                 scrollEnabled={ true }
                 decelerationRate="normal"
                 userAgent="MobileApp"
                 startInLoadingState={ true }
                 onNavigationStateChange={this._onNavigationStateChange}
                 injectedJavaScript={cssCode}
                 geolocationEnabled={ true }
                 />
    </View>
    )
  }
  _onNavigationStateChange = (webViewState) => { // you can also use navState
      this.props.navigation.setParams({ canGoBack: webViewState.canGoBack });
    }

  onBack = () => {
    this.referencedWebview.goBack();
  }
}

const styles = StyleSheet.create({
  topbar: {
    top: 2,
    left: 5,
    height: 30,
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 10,
    backgroundColor: 'lightblue',
    borderRadius:5,
    opacity: 0.7,
  },
});
