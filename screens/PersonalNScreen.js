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
  }

static navigationOptions = ({navigation}) => {
  return {
    title: 'Personal',
    headerLeft: (
    <TouchableOpacity  style={{marginLeft: 15}} onPress={ () => navigation.openDrawer()}>
       <Feather name="menu" size={35} color="#483148"/>
    </TouchableOpacity>),
    headerRight: (
    <TouchableOpacity  style={{marginRight: 15}} onPress={ () => navigation.navigate('NSearch')}>
       <Feather name="search" size={35} color="#483148"/>
    </TouchableOpacity>),
  };
};

  render() {
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
      >

      <WebView
        tabLabel={{label:"Lönehantering"}}
        style={{ flex: 1 }}
        automaticallyAdjustContentInsets={false}
        source={{ uri: 'https://www.kontorspersonal.se/lonehantering' }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        scrollEnabled={true}
        decelerationRate="normal"
        userAgent="MobileApp"
        startInLoadingState={true}
      />
      <WebView
      tabLabel={{label:"Redovisning"}}
        style={{ flex: 1 }}
        automaticallyAdjustContentInsets={false}
        source={{ uri: 'https://www.kontorspersonal.se/redovisning' }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        scrollEnabled={true}
        decelerationRate="normal"
        userAgent="MobileApp"
        startInLoadingState={true}
      />
      <WebView
      tabLabel={{label:"Administration"}}
        style={{ flex: 1 }}
        automaticallyAdjustContentInsets={false}
        source={{ uri: 'https://www.kontorspersonal.se/administration' }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        scrollEnabled={true}
        decelerationRate="normal"
        userAgent="MobileApp"
        startInLoadingState={true}
      />
      <WebView
      tabLabel={{label:"Chefsbefattning"}}
        style={{ flex: 1 }}
        automaticallyAdjustContentInsets={false}
        source={{ uri: 'https://www.kontorspersonal.se/chefsbefattning' }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        scrollEnabled={true}
        decelerationRate="normal"
        userAgent="MobileApp"
        startInLoadingState={true}
      />
      <WebView
      tabLabel={{label:"Controller"}}
        style={{ flex: 1 }}
        automaticallyAdjustContentInsets={false}
        source={{ uri: 'https://www.kontorspersonal.se/controller' }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        scrollEnabled={true}
        decelerationRate="normal"
        userAgent="MobileApp"
        startInLoadingState={true}
      />
      <WebView
      tabLabel={{label:"HR"}}
        style={{ flex: 1 }}
        automaticallyAdjustContentInsets={false}
        source={{ uri: 'https://www.kontorspersonal.se/hr' }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        scrollEnabled={true}
        decelerationRate="normal"
        userAgent="MobileApp"
        startInLoadingState={true}
      />
      <WebView
      tabLabel={{label:"Revisor"}}
        style={{ flex: 1 }}
        automaticallyAdjustContentInsets={false}
        source={{ uri: 'https://www.kontorspersonal.se/revisor' }}
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
    //marginTop: 30,
  },
  icon: {
    width: 300,
    height: 300,
    alignSelf: 'center',
  },
});
