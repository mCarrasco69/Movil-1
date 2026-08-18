import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { useReceta } from '../Providers/ProviderReceta'

export default function DetalleReceta() {

    const { recetaSeleccionada, volverALista } = useReceta();

    if (recetaSeleccionada == null) {
        return (
            <View>
                <Text>No se selecciono ninguna receta</Text>
                <Button title='Volver' onPress={volverALista} />
            </View>
        )
    }

    return (
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>Detalle de la Receta</Text>

            <Text>Numero: {recetaSeleccionada.numero}</Text>
            <Text>Nombre: {recetaSeleccionada.nombre}</Text>
            <Text>Fecha de creacion: {recetaSeleccionada.fecha}</Text>

            <Text style={styles.subtitulo}>Ingredientes</Text>

            {
                recetaSeleccionada.ingredientes.map((ingrediente, indice) => (
                    <Text key={indice}>{ingrediente}</Text>
                ))
            }

            <Button title='Volver a la lista' onPress={volverALista} />
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        borderRadius: 5,
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitulo: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
    },
})
