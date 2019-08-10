import React from 'react';
import {
  TouchableOpacity,
  View,
  StatusBar,
  WebView,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view'; // 0.8.0
import TabBar from "react-native-underline-tabbar";


export default class PersonalNScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      titles: ['Matte','Språk','Musik','Sång'],
      currentTitle: 'Matte',
    };
  }

static navigationOptions = ({navigation}) => {
  return {
    title: 'Registrera dig',
    headerLeft: (
    <TouchableOpacity  style={{marginLeft: 15}} onPress={ () => navigation.navigate('DrawerOpen')}>
       <Feather name="menu" size={35} color="#483148"/>
    </TouchableOpacity>),
  };
};

  changeTitle = (theKey) => {
    this.setState({
      currentTitle: this.state.titles[theKey.i]
    });
    console.log(this.state.titles[theKey.i]);
  }

  render() {
    return (
      <ScrollableTabView
      tabBarActiveTextColor="blue"
      renderTabBar={() => (
        <DefaultTabBar backgroundColor="rgba(255, 255, 255, 0.7)" />
      )}
      underlineColor="blue"
      underlineHeight={3}
      tabBarTextStyle = {{fontFamily: 'Roboto', fontSize: 20}}
      style={styles.container}
      tabBarPosition="bottom"
      prerenderingSiblingsNumber={0}
      // onChangeTab={this.changeTitle}
      >

      <WebView
        tabLabel={{label:"Jag vill jobba"}}
        style={{ flex: 1 }}
        automaticallyAdjustContentInsets={false}
        source={{ uri: 'https://www.kontorspersonal.se/checkout/10' }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        scrollEnabled={true}
        decelerationRate="normal"
        userAgent="MobileApp"
        startInLoadingState={true}
      />
      <WebView
      tabLabel={{label:"Jag vill anlita"}}
        style={{ flex: 1 }}
        automaticallyAdjustContentInsets={false}
        source={{ uri: 'https://www.kontorspersonal.se/checkout/8' }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        scrollEnabled={true}
        decelerationRate="normal"
        userAgent="MobileApp"
        startInLoadingState={true}
      />
    </ScrollableTabView>
  );
};
}
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  icon: {
    width: 300,
    height: 300,
    alignSelf: 'center',
  },
});
