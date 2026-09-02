import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useContextMaestro } from '../provider/ProviderMaestro';
import { Clase } from '../Modelos/Clase';
import { API_URL } from '../config/api';

export default function Clases() {

    const { listaClases, setListaClases, agregarClase, eliminarClase } = useContextMaestro();

    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [creditos, setCreditos] = useState('');


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

        cargarClases();
    }, []);


    function handleAgregarClase() {
        const nuevaClase: Clase = {

            nombre: nombre,
            descripcion: descripcion,
            creditos: parseInt(creditos)
        }
        agregarClase(nuevaClase);
        setNombre('');
        setDescripcion('');
        setCreditos('');
    }

    function handleEliminar(id: string) {
        eliminarClase(id);
        cargarClases();
    }


    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Gestion de Clases</Text>

            <TextInput
                placeholder="Nombre"
                style={styles.input}
                value={nombre}
                onChangeText={setNombre}
            />
            <TextInput
                placeholder="Descripcion"
                style={styles.input}
                value={descripcion}
                onChangeText={setDescripcion}
            />
            <TextInput
                placeholder="Creditos"
                style={styles.input}
                value={creditos}
                onChangeText={setCreditos}
                keyboardType="numeric"
            />
            <Button title="Agregar Clase" onPress={handleAgregarClase} />

            <Text style={styles.subtitulo}>Lista de Clases</Text>
            <FlatList
                data={listaClases}
                keyExtractor={(item) => item.id?.toString() ?? ''}
                renderItem={({ item }: { item: Clase }) =>
                    <View style={styles.item}>
                        <Text style={styles.text}>{item.nombre}</Text>
                        <Text style={styles.text}>{item.descripcion}</Text>
                        <Text style={styles.text}>Creditos: {item.creditos}</Text>
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
        padding: 10,
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
})
