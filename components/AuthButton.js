import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default class AuthButton extends React.Component {
    render() {
        return (
            <TouchableOpacity
                activeOpacity={.8}
                onPress={this.props.onPress}
                style={{
                    backgroundColor:this.props.buttonColor,
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: "40%",
                    padding: 18,
                    height:47,
                    borderWidth: 2,
                    borderRadius: 20,
                    marginLeft:5,
                    marginRight:5,
                }}>
                <Text
                    style={{
                        fontSize: 18,
                        //fontWeight: 'bold',
                        color: 'black',
                    }}>
                    {this.props.caption}
                </Text>
            </TouchableOpacity>
        );
    }
}
