import { View, Button, StyleSheet } from 'react-native'
import React from 'react'
import { useMascota } from '../Providers/MascotaProvider'

export default function PanelAcciones() {

    const { alimentar, jugar, descansar, reiniciar, puedeJugar } = useMascota();

    return (
        <View style={styles.contenedor}>
            <View style={styles.boton}>
                <Button title='Alimentar' onPress={alimentar} color='#8BC34A' />
            </View>
            <View style={styles.boton}>
                <Button title='Jugar' onPress={jugar} disabled={!puedeJugar} color='#FFC107' />
            </View>
            <View style={styles.boton}>
                <Button title='Descansar' onPress={descansar} color='#03A9F4' />
            </View>
            <View style={styles.boton}>
                <Button title='Reiniciar' onPress={reiniciar} color='#E91E63' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        marginVertical: 10,
    },
    boton: {
        marginVertical: 5,
    },
});
