import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';


export default class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.body}>
                <Text>Login Screen - {this.props.teste}</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    body: {
        paddingTop: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white"
    }
});