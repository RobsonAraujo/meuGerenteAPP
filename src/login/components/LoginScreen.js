import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';


export default class LoginScreen extends Component {

    callScreenSaldo() {

        const resetAction = StackActions.reset({
            index: 0, 
            actions: [NavigationActions.navigate({ routeName: 'Saldo' })], 
        });
        this.props.navigation.dispatch(resetAction);
    }

    render() {
        return (
            <View style={styles.body}>
                <Text style={styles.title}> Acesse a sua Conta</Text>
                <TextInput style={styles.input} />
                <TextInput style={styles.input} />
                <Text style={styles.msgForgetPassword}>Esqueceu sua senha ? </Text>
                <TouchableOpacity style={styles.button}
                    onPress={this.callScreenSaldo.bind(this)}
                >
                    <Text style={styles.buttonText}>
                        Entrar
                    </Text>
                </TouchableOpacity >
                <Text style={styles.msgRegister}> Faça seu cadastro. </Text>
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
    },
    title: {
        fontSize: 23,
        fontWeight: 'bold'
    },
    input: {
        borderBottomColor: '#CCC',
        borderBottomWidth: 1,
        width: '80%'
    },
    msgForgetPassword: {
        marginTop: 20
    },

    button: {
        marginTop: 30,
        backgroundColor: '#24B9DF',
        padding: 15,
        width: '60%',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 16
    },

    buttonText: {
        color: 'white'
    },

    msgRegister: {
        marginTop: 18,
        fontWeight: 'bold'
    }



});