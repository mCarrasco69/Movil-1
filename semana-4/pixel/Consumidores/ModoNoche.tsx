import { View, Text, Switch, StyleSheet } from 'react-native'
import React from 'react'
import { useMascota } from '../Providers/MascotaProvider'

export default function ModoNoche() {

    const { modoNoche, alternarModoNoche } = useMascota();

    return (
        <View style={styles.contenedor}>
            <Text style={styles.etiqueta}>Modo noche</Text>
            <Switch value={modoNoche} onValueChange={alternarModoNoche} />
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    etiqueta: {
        fontSize: 18,
        marginRight: 10,
    },
});
