import { View, Text, Image, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useMascota } from '../Providers/MascotaProvider'

export default function Cabecera() {

    const { nombre, estadoAnimo, necesitaAyuda, cambiarNombre } = useMascota();
    const [editando, setEditando] = useState<boolean>(false);
    const [borrador, setBorrador] = useState<string>(nombre);

    function confirmarNombre() {
        cambiarNombre(borrador);
        setEditando(false);
    }

    function iniciarEdicion() {
        setBorrador(nombre);
        setEditando(true);
    }

    return (
        <View style={styles.contenedor}>
            <Image
                source={{ uri: 'https://picsum.photos/200/200' }}
                style={styles.imagen}
            />
            {editando ? (
                <View style={styles.filaNombre}>
                    <TextInput
                        style={styles.inputNombre}
                        value={borrador}
                        onChangeText={setBorrador}
                        onSubmitEditing={confirmarNombre}
                        onBlur={confirmarNombre}
                        autoFocus
                        maxLength={20}
                        placeholder="Nombre de la mascota"
                    />
                </View>
            ) : (
                <Text style={styles.nombre} onPress={iniciarEdicion}>
                    {nombre} ✏️
                </Text>
            )}
            <Text style={styles.estado}>Estado: {estadoAnimo}</Text>
            {necesitaAyuda && (
                <Text style={styles.alerta}>¡{nombre} necesita ayuda!</Text>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        alignItems: 'center',
        marginVertical: 10,
    },
    imagen: {
        width: 180,
        height: 180,
        borderRadius: 90,
        marginBottom: 10,
    },
    nombre: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    filaNombre: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputNombre: {
        fontSize: 20,
        fontWeight: 'bold',
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 6,
        paddingHorizontal: 10,
        paddingVertical: 4,
        minWidth: 180,
        textAlign: 'center',
    },
    estado: {
        fontSize: 18,
        marginTop: 5,
    },
    alerta: {
        color: 'red',
        fontWeight: 'bold',
        marginTop: 5,
    },
});
