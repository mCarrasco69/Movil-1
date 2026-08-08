import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

interface ResultadoIMCProps {
    imc: number;
    clasificacion: string;
}

function obtenerColor(clasificacion: string): string {
    switch (clasificacion) {
        case 'Bajo peso':
            return '#3498db';
        case 'Peso normal':
            return '#27ae60';
        case 'Sobrepeso':
            return '#f39c12';
        case 'Obesidad':
            return '#e74c3c';
        default:
            return '#7f8c8d';
    }
}

export default function ResultadoIMC(props: ResultadoIMCProps) {
    const color = obtenerColor(props.clasificacion);

    return (
        <View style={[styles.resultadoContainer, { borderColor: color }]}>
            <Text style={styles.tituloResultado}>Resultado</Text>
            <Text style={styles.imcValor}>IMC: {props.imc}</Text>
            <Text style={[styles.clasificacion, { color }]}>{props.clasificacion}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    resultadoContainer: {
        marginTop: 20,
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#f8f9fa',
        borderWidth: 2,
        alignItems: 'center',
    },
    tituloResultado: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2c3e50',
        marginBottom: 10,
    },
    imcValor: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#2c3e50',
        marginBottom: 8,
    },
    clasificacion: {
        fontSize: 22,
        fontWeight: '700',
    },
})
