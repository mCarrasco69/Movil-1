import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useContextMaestro } from '../provider/ProviderMaestro';
import { Maestro } from '../Modelos/Maestro';
import { Clase } from '../Modelos/Clase';
import { API_URL } from '../config/api';

export default function BuscarMaestros() {

    const { listaClases, setListaClases } = useContextMaestro();

    const [claseId, setClaseId] = useState('');
    const [resultados, setResultados] = useState<Maestro[]>([]);


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


    async function handleBuscar() {
        if (claseId === '') {
            Alert.alert('Ingrese el ID de la clase');
            return;
        }
        try {
            const response = await fetch(`${API_URL}/maestros/clase/${claseId}`);
            const data = await response.json();
            setResultados(data);
        } catch (error) {
            Alert.alert('Error al buscar maestros', (error as Error).message);
        }
    }


    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Buscar Maestros por Clase</Text>

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

            <Button title="Buscar" onPress={handleBuscar} />

            <Text style={styles.subtitulo}>Resultados</Text>
            <FlatList
                data={resultados}
                keyExtractor={(item) => item.id?.toString() ?? ''}
                renderItem={({ item }: { item: Maestro }) =>
                    <View style={styles.item}>
                        <Text style={styles.text}>{item.nombre} {item.apellido}</Text>
                        <Text style={styles.text}>{item.email}</Text>
                        <Text style={styles.text}>{item.especialidad}</Text>
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
})
