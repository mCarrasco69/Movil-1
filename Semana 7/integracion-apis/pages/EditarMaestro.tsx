import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import { useContextMaestro } from '../provider/ProviderMaestro';
import { Maestro } from '../Modelos/Maestro';
import { API_URL } from '../config/api';

export default function EditarMaestro() {

    const { editarMaestro } = useContextMaestro();

    const [id, setId] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [especialidad, setEspecialidad] = useState('');


    async function buscarMaestro() {
        try {
            const response = await fetch(`${API_URL}/maestros`);
            const data = await response.json();
            const maestro = data.find((m: Maestro) => m.id?.toString() === id);
            if (maestro) {
                setNombre(maestro.nombre);
                setApellido(maestro.apellido);
                setEmail(maestro.email);
                setEspecialidad(maestro.especialidad);
            } else {
                Alert.alert('Maestro no encontrado');
            }
        } catch (error) {
            Alert.alert('Error al buscar el maestro', (error as Error).message);
        }
    }


    function handleEditarMaestro() {
        const maestroEditado: Maestro = {

            nombre: nombre,
            apellido: apellido,
            email: email,
            especialidad: especialidad
        }
        editarMaestro(id, maestroEditado);
        setId('');
        setNombre('');
        setApellido('');
        setEmail('');
        setEspecialidad('');
    }


    return (
        <View>
            <Text>Editar Maestro</Text>
            <TextInput
                placeholder="ID del Maestro"
                style={styles.input}
                value={id}
                onChangeText={setId}
            />
            <Button title="Buscar" onPress={buscarMaestro} />
            <TextInput
                placeholder="Nombre"
                style={styles.input}
                value={nombre}
                onChangeText={setNombre}
            />
            <TextInput
                placeholder="Apellido"
                style={styles.input}
                value={apellido}
                onChangeText={setApellido}
            />
            <TextInput
                placeholder="Email"
                style={styles.input}
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                placeholder="Especialidad"
                style={styles.input}
                value={especialidad}
                onChangeText={setEspecialidad}
            />
            <Button title="Editar Maestro" onPress={handleEditarMaestro} />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        margin: 10,
        borderRadius: 5,
    },
})
