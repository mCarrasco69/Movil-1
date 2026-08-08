import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import ResultadoIMC from './ResultadoIMC'

export default function FormularioComponent() {

    const [peso, setPeso] = useState(70);
    const [altura, setAltura] = useState(1.70);
    const [imc, setImc] = useState(0);
    const [clasificacion, setClasificacion] = useState('');

    useEffect(() => {
        const calculo = peso / (altura * altura);
        setImc(parseFloat(calculo.toFixed(2)));

        if (calculo < 18.5) {
            setClasificacion('Bajo peso');
        } else if (calculo >= 18.5 && calculo <= 24.9) {
            setClasificacion('Peso normal');
        } else if (calculo >= 25 && calculo <= 29.9) {
            setClasificacion('Sobrepeso');
        } else {
            setClasificacion('Obesidad');
        }
    }, [peso, altura]);

    function aumentarPeso() {
        setPeso(peso + 1);
    }

    function disminuirPeso() {
        if (peso > 1) {
            setPeso(peso - 1);
        }
    }

    function aumentarAltura() {
        setAltura(parseFloat((altura + 0.01).toFixed(2)));
    }

    function disminuirAltura() {
        if (altura > 0.5) {
            setAltura(parseFloat((altura - 0.01).toFixed(2)));
        }
    }

    return (
        <View style={styles.formContainer}>
            <Text style={styles.titulo}>Calculadora de IMC</Text>

            <View style={styles.campo}>
                <Text style={styles.label}>Peso: {peso} kg</Text>
                <View style={styles.botones}>
                    <View style={styles.boton}>
                        <Button title="- 1 kg" onPress={disminuirPeso} color="#e74c3c" />
                    </View>
                    <View style={styles.boton}>
                        <Button title="+ 1 kg" onPress={aumentarPeso} color="#27ae60" />
                    </View>
                </View>
            </View>

            <View style={styles.campo}>
                <Text style={styles.label}>Altura: {altura.toFixed(2)} m</Text>
                <View style={styles.botones}>
                    <View style={styles.boton}>
                        <Button title="- 1 cm" onPress={disminuirAltura} color="#e74c3c" />
                    </View>
                    <View style={styles.boton}>
                        <Button title="+ 1 cm" onPress={aumentarAltura} color="#27ae60" />
                    </View>
                </View>
            </View>

            <ResultadoIMC imc={imc} clasificacion={clasificacion} />
        </View>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 20,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#2c3e50',
    },
    campo: {
        marginBottom: 20,
    },
    label: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 10,
        color: '#34495e',
    },
    botones: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
    },
    boton: {
        flex: 1,
        marginHorizontal: 5,
    },
})