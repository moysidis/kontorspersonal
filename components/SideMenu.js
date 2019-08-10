import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons';
import call from 'react-native-phone-call'

const args = {
  number: '0774218888', // String value with the number to call
  prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call
}

export default class DrawerContainer extends React.Component {

  render() {
    const { navigation } = this.props
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height:200,
          }}>
          <Image
            source={require('../assets/images/Menuimage.png')}
            style={{
              left:-25,
            }} />
            
        </View>
            <View style={[styles.drawerItem, {borderTopWidth:.6}]}>
              <View style={styles.drawerIcon}>
                <Feather name="home" size={25} color="#333" onPress={() => navigation.navigate('HomePage')} />
              </View>
              <Text
                onPress={() => navigation.navigate('HomePage')}
                style={styles.drawerText}>
                Startsidan
              </Text>
            </View>
            <View style={styles.drawerItem}>
              <View style={styles.drawerIcon}>
                <Feather name="user" size={25} color="#333" onPress={() => navigation.navigate('Account')} />
              </View>
            <Text
              onPress={() => navigation.navigate('Account')}
              style={styles.drawerText}>
              Mitt Konto
            </Text>
            </View>
            <View style={styles.drawerItem}>
              <View style={styles.drawerIcon}>
                <Feather name="users" size={25} color="#333" onPress={() => navigation.navigate('Personel')} />
              </View>
              <Text
                onPress={() => navigation.navigate('Personel')}
                style={styles.drawerText}>
                Personal
              </Text>
            </View>
            <View style={styles.drawerItem}>
              <View style={styles.drawerIcon}>
                <Feather name="check-square" size={25} color="#333" onPress={() => navigation.navigate('Job')} />
              </View>
              <Text
                onPress={() => navigation.navigate('Job')}
                style={styles.drawerText}>
                För jobbsökande
              </Text>
            </View>

            <View style={styles.drawerItem}>
              <View style={styles.drawerIcon}>
                <Feather name="edit" size={25} color="#333" onPress={() => navigation.navigate('Register')} />
              </View>
              <Text
                onPress={() => navigation.navigate('Register')}
                style={styles.drawerText}>
                Registrera dig
              </Text>
            </View>
{/*
            <View style={styles.drawerItem}>
              <View style={styles.drawerIcon}>
                <Feather name="phone" size={25} color="#333" onPress={() => navigation.navigate('Register')} />
              </View>
              <Text
                onPress={() => call(args).catch(console.error)}
                style={styles.drawerText}>
                Ring oss
              </Text>
            </View>
*/}
            <View style={styles.drawerItem}>
              <View style={styles.drawerIcon}>
                <Feather name="mail" size={25} color="#333" onPress={() => navigation.navigate('Contact')} />
              </View>
              <Text
                onPress={() => navigation.navigate('Contact')}
                style={styles.drawerText}>
                Kontakta oss
              </Text>
            </View>

          {/* </ImageBackground> */}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  drawerItem: {
    flex:6,
    flexDirection: 'row',
    // height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: .6,
  },
  drawerIcon: {
    marginLeft:20,
    flex:1,
  },
  drawerText: {
    fontSize: 16,
    color: '#333',
    padding: 15,
    borderColor: '#333',
    //backgroundColor: 'transparent',
    opacity: 0.7,
    // width: "100%",
    flex: 6,
  }
})

/*
<View style={styles.drawerItem}>
<View style={styles.drawerIcon}>
<Feather name="file-text" size={25} color="#333" onPress={() => navigation.navigate('Request')} />
</View>
<Text
onPress={() => navigation.navigate('Request')}
style={styles.drawerText}>
Skicka förfrågan
</Text>
</View>
*/
