import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  WebView,
} from 'react-native';
import { Entypo, Feather } from '@expo/vector-icons';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view'; // 0.8.0
import TabBar from "react-native-underline-tabbar";

export default class JobbBarnvaktScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: 'För jobbsökande',
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
    return (
      <ScrollableTabView
      tabBarActiveTextColor="blue"
      renderTabBar={() => <TabBar
        underlineColor="blue"
        underlineHeight={3}
        tabBarTextStyle = {{fontFamily: 'Roboto', fontSize: 16}}
        />}
      style={styles.container}
      tabBarPosition="bottom"
      prerenderingSiblingsNumber={0}
      // onChangeTab={this.changeTitle}
      >
        <WebView
              tabLabel={{label:"Lönehanterare"}}
                 ref={refForBack => { this.referencedWebview = refForBack; }}
                 style={{ flex:1 }}
                 automaticallyAdjustContentInsets={ false }
                 source={ { uri: 'https://www.kontorspersonal.se/jobb-loner' } }
                 javaScriptEnabled={ true }
                 domStorageEnabled={ true }
                 scrollEnabled={ true }
                 decelerationRate="normal"
                 userAgent="MobileApp"
                 startInLoadingState={ true }
                 onNavigationStateChange={this._onNavigationStateChange}
                 injectedJavaScript={cssCode}
         />
          <WebView
              tabLabel={{label:"Redovisningsekonom"}}
                 ref={refForBack => { this.referencedWebview = refForBack; }}
                 style={{ flex:1 }}
                 automaticallyAdjustContentInsets={ false }
                 source={ { uri: 'https://www.kontorspersonal.se/jobb-redovisning' } }
                 javaScriptEnabled={ true }
                 domStorageEnabled={ true }
                 scrollEnabled={ true }
                 decelerationRate="normal"
                 userAgent="MobileApp"
                 startInLoadingState={ true }
                 onNavigationStateChange={this._onNavigationStateChange}
                 injectedJavaScript={cssCode}
         />
          <WebView
              tabLabel={{label:"Administratör"}}
                 ref={refForBack => { this.referencedWebview = refForBack; }}
                 style={{ flex:1 }}
                 automaticallyAdjustContentInsets={ false }
                 source={ { uri: 'https://www.kontorspersonal.se/jobb-administration' } }
                 javaScriptEnabled={ true }
                 domStorageEnabled={ true }
                 scrollEnabled={ true }
                 decelerationRate="normal"
                 userAgent="MobileApp"
                 startInLoadingState={ true }
                 onNavigationStateChange={this._onNavigationStateChange}
                 injectedJavaScript={cssCode}
         />
    </ScrollableTabView>
    );
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
