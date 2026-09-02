import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Home() {

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Integracion de Apis</Text>
            <Text style={styles.texto}>Universidad - Gestion de Maestros y Clases</Text>
            <Text style={styles.texto}>Use el menu para navegar</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    texto: {
        fontSize: 16,
        marginBottom: 5,
    },
})
