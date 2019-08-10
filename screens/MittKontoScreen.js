import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  Platform,
  Linking,
  WebView,
  ToastAndroid,
  Alert,
} from 'react-native';
import { Feather, Entypo } from '@expo/vector-icons';
// import { WebView } from 'react-native-webview';

let self; // self is used to replace this when referencedWebview is invoked. If this is used an undefined error is shown

// jsCode is used to open the acount menu
const jsCode = `
var evt = new Event("click", {
    view: window,
    bubbles: true,
    cancelable: true,
    clientX: 20,
}),
ele = document.getElementById("member_sidebar_toggle");
ele.dispatchEvent(evt);
`;

export default class MittKontoScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // if there is a path in the screenProps parameter and no registration has been performed
      // if it iOS then add : to the url address
      url: (this.props.screenProps !== '' && !global.registered) ? (Platform.OS==='ios'?this.props.screenProps.replace('https','https:'):this.props.screenProps) : 'https://www.kontorspersonal.se/account',
      loaded: false,
      favoritesActive: false,
    };
    self = this;
    this.props.navigation.setParams({ handleBack: this.onBack }); // map the function to a parameter to be used for the back button    
    this.props.navigation.setParams({ canGoBack: false }); 
    this.props.navigation.setParams({ loggedInState: false }); 
}
 
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Mitt Konto',
      headerTitleStyle:{
        textAlign: "center",
        flex: 1,
      },      
      headerLeft: (
        <View style={{flex: 1, flexDirection: 'row'}} >
          <TouchableOpacity style={{ marginLeft: 15 }} onPress={() => navigation.openDrawer()}>
            <Feather name="menu" size={35} color="#483148" />
          </TouchableOpacity>
          {(navigation.state.params && navigation.state.params.loggedInState) &&
          <TouchableOpacity style={{ marginLeft: 25, flex: 1, justifyContent: 'center', alignItems:'center' }} onPress={() => self.referencedWebview.injectJavaScript(jsCode)}>
              <Feather name="user" size={25} color="#483148" />      
              <Text>Meny</Text>
          </TouchableOpacity>  
          }
        </View>
      ),
      headerRight: (
          <TouchableOpacity style={{ marginRight: 15 }} onPress = {() => navigation.state.params.handleBack()}>
            {(navigation.state.params && navigation.state.params.canGoBack) &&
              <Entypo name="back" size={40} color="#483148" />
            }
            </TouchableOpacity>
        )
    };
  };

  _showProfilePage = () => {
    ToastAndroid.showWithGravity(
      'Webbläsaren öppnas nu. Glöm inte att stänga den så fort du är klar med fotouppladdningen.',
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
    );
    Linking.openURL('https://kontorspersonal.se/account/profile'); 
  };

  _onNavigationStateChange = (webViewState) => { // you can also use navState
    // console.log('favoritesAllreadyShown:',this.state.favoritesAllreadyShown);
    let loggedIn = webViewState.url.search('https://www.kontorspersonal.se/account') > -1;
    let profile = webViewState.url.search('https://www.kontorspersonal.se/account/profile') > -1;
    let fActive = webViewState.url.slice(-1) == "#";
    let canGoBack = (webViewState.canGoBack && !(webViewState.url.search('https://www.kontorspersonal.se/account/home') > -1));
    this.setState({
      loaded: !webViewState.loading,
      favoritesActive: fActive
    });
    this.props.navigation.setParams({ canGoBack: canGoBack });
    if (!webViewState.loading){
        this.props.navigation.setParams({ loggedInState: loggedIn });
    }
     
    if (Platform.OS==='android' && profile){
      Alert.alert(
        'Öppna webbläsare?',
        'Webbläsaren behöver öppnas ifall du vill ladda upp ett foto. Vill du öppna webbläsaren?',
        [
          {text: 'Ja', onPress: () => this._showProfilePage()},
          {text: 'Nej', onPress: () => console.log('NO Pressed'), style: 'cancel'},
        ]
      );      
    }
  
  }

  onBack = () => {
    if (this.state.favoritesActive){
      this.referencedWebview.reload();
    } else {
      this.referencedWebview.goBack();
    }
  }

  
  render() {
    let cssCode = `
        document.querySelector('.header').style.display = 'none';
    `;
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          hidden={false}
        />
          <WebView
          ref={refForInjection => { this.referencedWebview = refForInjection; }}
          style={{ flex: 1 }}
          automaticallyAdjustContentInsets={false}
          source={{ uri: this.state.url }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          scrollEnabled={true}
          decelerationRate="normal"
          userAgent="MobileApp"
          startInLoadingState={true}
          onNavigationStateChange={this._onNavigationStateChange}
          injectedJavaScript={cssCode}
          geolocationEnabled={ true }
          />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  topbar: {
    top: 4,
    left: 2,
    height: 30,
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 10,
    backgroundColor: 'lightblue',
    borderRadius: 5,
    opacity: 0.7,
    flexDirection: "row",
    alignItems:"center",
    paddingHorizontal: 10,
    borderWidth:0.2,
  },
  menubutton: {
    top: 150,
    left: 20,
    width: 50,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: 'lightblue',
    borderRadius: 5,
    opacity: 0.8,
    zIndex: 10,
    borderWidth:0.2,
  },
});