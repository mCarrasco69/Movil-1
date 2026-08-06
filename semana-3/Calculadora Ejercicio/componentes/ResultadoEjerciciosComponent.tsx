import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { ResultadoEjercicios } from "../Modelos/ResultadoEjercicios";

export default function ResultadoEjerciciosComponent({ resultado }: { resultado: ResultadoEjercicios }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Resultado de Ejercicios</Text>
      <Text>Días del período: {resultado.diasPeriodo}</Text>
      <Text>Días de entrenamiento: {resultado.diasEntrenamiento}</Text>
      <Text>Objetivo: {resultado.objetivo} horas</Text>
      <Text>Promedio: {resultado.promedio} horas/día</Text>
      <Text>Objetivo alcanzado: {resultado.objetivoAlcanzado ? 'Sí' : 'No'}</Text>
      <Text>Calificación: {resultado.calificacion}/3</Text>
      <Text>Descripción: {resultado.descripcionCalificacion}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    width: '80%',
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  }
});
