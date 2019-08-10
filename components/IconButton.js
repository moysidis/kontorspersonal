import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default class AuthButton extends React.Component {
    render() {
        return (
            <TouchableOpacity
                activeOpacity={.8}
                onPress={this.props.onPress}
                style={{
                    backgroundColor:this.props.buttonColor,
                    alignItems: 'center',
                    padding: 18,
                    height:60
                }}>
                <MaterialIcons name={this.props.iconName} size={this.props.iconSize} color="black"/>
            </TouchableOpacity>
        );
    }
}
