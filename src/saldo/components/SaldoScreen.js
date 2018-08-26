import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';

export default class LoginScreen extends Component {

    render() {
        return (
            <ScrollView contentContainerStyle={{ paddingBottom: 30,  alignItems: 'center' }}>
                <Text style={styles.title}>Saldo Mensal</Text>
                <View>

                    <Text style={styles.price}  >101,85</Text>
                </View>
                <Text style={styles.msg}>Valor comparativo em relação ao mês anterior</Text>
                <Text style={styles.title}>Todos os Gastos</Text>


                <Text style={styles.ball}></Text><Text>Opção 1</Text>
                <Text style={styles.ball}></Text><Text>Opção 2</Text>
                <Text style={styles.ball}></Text><Text>Opção 3</Text>
                <Text style={styles.ball}></Text><Text>Opção 4</Text>
                <Text style={styles.ball}></Text><Text>Opção 5</Text>
                <Text style={styles.ball}></Text><Text>Opção 6</Text>




                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                        Compare seus gastos
                    </Text>
                </TouchableOpacity >
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    body: {
        paddingTop: 20,
        flex: 1,
        backgroundColor: "white"
    },

    title: {
        color: "#333333",
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 30
    },
    price: {
        fontSize: 40,
        color: '#24B9DF',
        fontWeight: 'bold',
        marginTop: 30
    },
    msg: {
        marginTop: 30,
        fontSize: 10
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
    ball: {
        backgroundColor: "black",
        borderRadius: 20,
        width: 20,
        height: 20
    }
});