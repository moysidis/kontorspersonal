import React from 'react';
import { Text, View } from 'react-native';

export default class BmoyButton extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
            padding: 12,
            margin: 5,
            borderRadius: 5,
            borderColor: 'white',
            borderWidth: 1,
            textAlign: 'center',
            backgroundColor: 'purple',
            opacity: 0.7,
            // backgroundColor: 'transparent',
            width: 180,
          }}>
          {this.props.caption}
        </Text>
      </View>
    );
  }
}
