import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useEstudiante } from '../Providers/ProviderEstudiante'

export default function ConsumidorListaEstudiante() {

    const { estudiantes } = useEstudiante();

    return (
        <View>
            <Text>Lista de Estudiantes</Text>
            <FlatList
                data={estudiantes}
                renderItem={({ item }) =>
                    <Text>{item.id} - {item.name}</Text>}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
                ListEmptyComponent={() => <Text>No hay estudiantes</Text>}
            />
        </View>
    )
}
