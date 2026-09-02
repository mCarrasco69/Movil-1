import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useContextMaestro } from '../provider/ProviderMaestro';
import { Maestro } from '../Modelos/Maestro';

export default function AgregarMaestro() {

    const { agregarMaestro } = useContextMaestro();

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [especialidad, setEspecialidad] = useState('');


    function handleAgregarMaestro() {
        const nuevoMaestro: Maestro = {

            nombre: nombre,
            apellido: apellido,
            email: email,
            especialidad: especialidad
        }
        agregarMaestro(nuevoMaestro);
        setNombre('');
        setApellido('');
        setEmail('');
        setEspecialidad('');
    }


    return (
        <View>
            <Text>Formulario de Agregar Maestro</Text>
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
            <Button title="Agregar Maestro" onPress={handleAgregarMaestro} />
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
