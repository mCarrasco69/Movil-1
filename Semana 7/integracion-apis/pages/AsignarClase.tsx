import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useContextMaestro } from '../provider/ProviderMaestro';
import { Maestro } from '../Modelos/Maestro';
import { Clase } from '../Modelos/Clase';
import { API_URL } from '../config/api';

export default function AsignarClase() {

    const { listaMaestros, setListaMaestros, listaClases, setListaClases, asignarClase } = useContextMaestro();

    const [maestroId, setMaestroId] = useState('');
    const [claseId, setClaseId] = useState('');


    async function cargarMaestros() {
        try {
            const response = await fetch(`${API_URL}/maestros`);
            const data = await response.json();
            setListaMaestros(data);
        } catch (error) {
            Alert.alert('Error al cargar los maestros', (error as Error).message);
        }
    }

    async function cargarClases() {
        try {
            const response = await fetch(`${API_URL}/clases`);
            const data = await response.json();
            setListaClases(data);
        } catch (error) {
            Alert.alert('Error al cargar las clases', (error as Error).message);
        }
    }

    useEffect(() => {

        cargarMaestros();
        cargarClases();
    }, []);


    function handleAsignarClase() {
        if (maestroId === '' || claseId === '') {
            Alert.alert('Ingrese el ID del maestro y el ID de la clase');
            return;
        }
        asignarClase(maestroId, claseId);
        setMaestroId('');
        setClaseId('');
    }


    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Asignar Clase a Maestro</Text>

            <Text style={styles.label}>ID del Maestro:</Text>
            <TextInput
                placeholder="Ingrese el ID del maestro"
                style={styles.input}
                value={maestroId}
                onChangeText={setMaestroId}
                keyboardType="numeric"
            />

            <Text style={styles.subtitulo}>Maestros disponibles:</Text>
            <FlatList
                data={listaMaestros}
                keyExtractor={(item) => item.id?.toString() ?? ''}
                renderItem={({ item }: { item: Maestro }) =>
                    <View style={styles.item}>
                        <Text style={styles.text}>ID: {item.id} - {item.nombre} {item.apellido}</Text>
                    </View>
                }
            />

            <Text style={styles.label}>ID de la Clase:</Text>
            <TextInput
                placeholder="Ingrese el ID de la clase"
                style={styles.input}
                value={claseId}
                onChangeText={setClaseId}
                keyboardType="numeric"
            />

            <Text style={styles.subtitulo}>Clases disponibles:</Text>
            <FlatList
                data={listaClases}
                keyExtractor={(item) => item.id?.toString() ?? ''}
                renderItem={({ item }: { item: Clase }) =>
                    <View style={styles.item}>
                        <Text style={styles.text}>ID: {item.id} - {item.nombre}</Text>
                    </View>
                }
            />

            <Button title="Asignar Clase" onPress={handleAsignarClase} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    subtitulo: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 5,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        margin: 5,
        borderRadius: 5,
    },
    item: {
        backgroundColor: '#f0f0f0',
        margin: 5,
        padding: 10,
        borderRadius: 5,
    },
    text: {
        fontSize: 16,
    },
})
