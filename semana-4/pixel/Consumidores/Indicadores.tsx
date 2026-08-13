import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useMascota } from '../Providers/MascotaProvider'

export default function Indicadores() {

    const { indicadores } = useMascota();

    return (
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>Indicadores</Text>
            {indicadores.map(ind => (
                <Text key={ind.nombre} style={styles.indicador}>
                    {ind.nombre}: {ind.valor}%
                </Text>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        marginVertical: 10,
        alignItems: 'center',
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    indicador: {
        fontSize: 18,
        marginVertical: 2,
    },
});
