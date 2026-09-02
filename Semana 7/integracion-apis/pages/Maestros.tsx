import { View, Text, FlatList, StyleSheet, Button, Alert } from 'react-native'
import React, { useEffect } from 'react'
import { useContextMaestro } from '../provider/ProviderMaestro';
import { Maestro } from '../Modelos/Maestro';
import { API_URL } from '../config/api';

export default function Maestros() {

    const { listaMaestros, setListaMaestros, eliminarMaestro } = useContextMaestro();

    async function cargarMaestros() {
        try {
            const response = await fetch(`${API_URL}/maestros`);
            const data = await response.json();
            setListaMaestros(data);
        } catch (error) {
            Alert.alert('Error al cargar los maestros', (error as Error).message);
        }
    }

    useEffect(() => {

        cargarMaestros();
    }, []);

    function handleEliminar(id: string) {
        eliminarMaestro(id);
        cargarMaestros();
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Lista de Maestros</Text>
            <FlatList
                data={listaMaestros}
                keyExtractor={(item) => item.id?.toString() ?? ''}
                renderItem={({ item }: { item: Maestro }) =>
                    <View style={styles.item}>
                        <Text style={styles.text}>{item.nombre} {item.apellido}</Text>
                        <Text style={styles.text}>{item.email}</Text>
                        <Text style={styles.text}>{item.especialidad}</Text>
                        <Button title="Eliminar" onPress={() => handleEliminar(item.id!)} />
                    </View>
                }
            />
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
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    item: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        margin: 10,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
})
