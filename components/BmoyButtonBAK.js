import React from 'react';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo';

export default class BmoyButton extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <LinearGradient
          colors={['#6a2191', '#680f99', '#390256']}
          style={{ padding: 15, alignItems: 'center', borderRadius: 5, width:180 }}>
          <Text
            style={{
              backgroundColor: 'transparent',
              fontSize: 15,
              color: '#fff',
            }}>
            {this.props.caption}
          </Text>
        </LinearGradient>
      </View>
    );
  }
}
