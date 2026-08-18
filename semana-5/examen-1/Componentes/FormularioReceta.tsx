import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import { useReceta } from '../Providers/ProviderReceta'

export default function FormularioReceta() {

    const { agregarReceta } = useReceta();

    const [nombre, setNombre] = useState<string>('');
    const [fecha, setFecha] = useState<string>('');
    const [ingrediente1, setIngrediente1] = useState<string>('');
    const [ingrediente2, setIngrediente2] = useState<string>('');
    const [ingrediente3, setIngrediente3] = useState<string>('');
    const [ingrediente4, setIngrediente4] = useState<string>('');
    const [ingrediente5, setIngrediente5] = useState<string>('');

    function guardarReceta() {

        let ingredientes: string[] = [ingrediente1, ingrediente2, ingrediente3, ingrediente4, ingrediente5];

        agregarReceta(nombre, ingredientes, fecha);
        Alert.alert('Receta guardada correctamente');

        setNombre('');
        setFecha('');
        setIngrediente1('');
        setIngrediente2('');
        setIngrediente3('');
        setIngrediente4('');
        setIngrediente5('');
    }

    return (
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>Agregar Receta</Text>

            <TextInput placeholder='Nombre de la receta'
                style={styles.input}
                value={nombre}
                onChangeText={setNombre}
            />

            <Text>Ingredientes (maximo 5)</Text>

            <TextInput placeholder='Ingrediente 1'
                style={styles.input}
                value={ingrediente1}
                onChangeText={setIngrediente1}
            />

            <TextInput placeholder='Ingrediente 2'
                style={styles.input}
                value={ingrediente2}
                onChangeText={setIngrediente2}
            />

            <TextInput placeholder='Ingrediente 3'
                style={styles.input}
                value={ingrediente3}
                onChangeText={setIngrediente3}
            />

            <TextInput placeholder='Ingrediente 4'
                style={styles.input}
                value={ingrediente4}
                onChangeText={setIngrediente4}
            />

            <TextInput placeholder='Ingrediente 5'
                style={styles.input}
                value={ingrediente5}
                onChangeText={setIngrediente5}
            />

            <TextInput placeholder='fecha que se ingreso la receta'
                style={styles.input}
                value={fecha}
                onChangeText={setFecha}
            />

            <Button title='Agregar Receta' onPress={guardarReceta} />
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
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
})
