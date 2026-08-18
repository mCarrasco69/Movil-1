import { View, Text, Button, StyleSheet, Alert, FlatList } from 'react-native'
import React from 'react'
import { useReceta } from '../Providers/ProviderReceta'

export default function ListaRecetas() {

    const { recetas, eliminarReceta } = useReceta();

    function borrarReceta(numero: number) {
        eliminarReceta(numero);
        Alert.alert('Receta eliminada correctamente');
    }

    return (
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>Lista de Recetas</Text>

            <FlatList
                data={recetas}
                keyExtractor={(item) => item.numero.toString()}
                ListEmptyComponent={() => <Text>No hay recetas registradas</Text>}
                renderItem={({ item }) => (
                    <View style={styles.fila}>
                        <Text>Receta numero: {item.numero}</Text>
                        <Text>Nombre: {item.nombre}</Text>
                        <Text>Fecha: {item.fecha}</Text>
                        <Text>Cantidad de ingredientes: {item.ingredientes.length}</Text>
                        <Button title='Eliminar' onPress={() => borrarReceta(item.numero)} />
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        marginBottom: 20,
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    fila: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
})
