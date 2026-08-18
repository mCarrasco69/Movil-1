import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import { useReceta } from '../Providers/ProviderReceta'

export default function BuscarReceta() {

    const { buscarReceta } = useReceta();

    const [numero, setNumero] = useState<string>('');

    function verDetalle() {

        if (numero == '') {
            Alert.alert('Debe ingresar el numero de la receta');
            return
        }

        buscarReceta(numero);
        setNumero('');
    }

    return (
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>Ver Detalle de una Receta</Text>

            <TextInput placeholder='Numero de la receta'
                style={styles.input}
                value={numero}
                onChangeText={setNumero}
            />

            <Button title='Buscar' onPress={verDetalle} />
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
