import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { useMascota } from '../Providers/MascotaProvider'

export default function Bitacora() {

    const { bitacora } = useMascota();

    return (
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>Bitácora</Text>
            <ScrollView style={styles.lista}>
                {bitacora.length === 0 ? (
                    <Text style={styles.vacio}>Aún no hay eventos</Text>
                ) : (
                    bitacora.map(item => (
                        <Text key={item.id} style={styles.entrada}>
                            [{item.hora}] {item.mensaje}
                        </Text>
                    ))
                )}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        marginVertical: 10,
        maxHeight: 250,
    },
    lista: {
        maxHeight: 200,
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    entrada: {
        fontSize: 16,
        paddingVertical: 2,
    },
    vacio: {
        fontSize: 16,
        color: 'gray',
        fontStyle: 'italic',
    },
});
