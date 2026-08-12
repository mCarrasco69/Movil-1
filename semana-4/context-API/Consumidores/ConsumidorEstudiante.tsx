import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useEstudiante } from '../Providers/ProviderEstudiante'

export default function ConsumidorEstudiante() {

    const [name, setName] = useState<string>('');

    const { agregarEstudiante } = useEstudiante();

    function agregarEstudianteHandler() {
        if (name.trim() === '') {
            Alert.alert('Ingrese un nombre');
            return;
        }

        agregarEstudiante(name);
        Alert.alert('Estudiante agregado correctamente');
        setName('');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Agregar Estudiante</Text>
            <TextInput
                placeholder='Ingrese nombre del estudiante'
                value={name}
                onChangeText={setName}
                style={styles.input}
            />
            <Button title='Agregar Estudiante' onPress={agregarEstudianteHandler} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        padding: 10,
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        marginBottom: 10,
        borderRadius: 5,
    },
});
