import { View, Button, StyleSheet } from 'react-native'
import React from 'react'
import { useMascota } from '../Providers/MascotaProvider'

export default function PanelAcciones() {

    const { alimentar, jugar, descansar, reiniciar, puedeJugar } = useMascota();

    return (
        <View style={styles.contenedor}>
            <View style={styles.boton}>
                <Button title='Alimentar' onPress={alimentar} />
            </View>
            <View style={styles.boton}>
                <Button title='Jugar' onPress={jugar} disabled={!puedeJugar} />
            </View>
            <View style={styles.boton}>
                <Button title='Descansar' onPress={descansar} />
            </View>
            <View style={styles.boton}>
                <Button title='Reiniciar' onPress={reiniciar} color='red' />
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
