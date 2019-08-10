import React from 'react';
import {
  TouchableOpacity,
  View,
  StatusBar,
  WebView,
  Text,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

export default class PersonalSokScreen extends React.Component {
static navigationOptions = ({navigation}) => {
  return {
    title: 'Sök personal',
    headerLeft: (
    <TouchableOpacity  style={{marginLeft: 15}} onPress={ () => navigation.openDrawer()}>
       <Feather name="menu" size={35} color="#483148"/>
    </TouchableOpacity>),
    headerRight: (
    <TouchableOpacity  style={{marginRight: 15, flex: 1, justifyContent: 'center', alignItems:'center'}} onPress={ () => navigation.navigate('NHome')}>
      <Feather name="users" size={35} color="#483148"/>
      <Text>Kategorier</Text>
    </TouchableOpacity>),
  };
};

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
                 style={{ flex:1 }}
                 automaticallyAdjustContentInsets={ false }
                 source={ { uri: 'https://www.kontorspersonal.se/m-personal' } }
                 javaScriptEnabled={ true }
                 domStorageEnabled={ true }
                 scrollEnabled={ true }
                 decelerationRate="normal"
                 userAgent="MobileApp"
                 startInLoadingState={ true }
                 injectedJavaScript={cssCode}
                 geolocationEnabled={ true }
                 />
    </View>
    )

  }
}
