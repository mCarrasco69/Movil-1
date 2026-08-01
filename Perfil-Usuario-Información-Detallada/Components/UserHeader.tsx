import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function UserHeader({ nombre, ocupacion }: { nombre: string, ocupacion: string }) {
  return (
    <View style={styles.header}>
      <Text style={styles.nombre}>{nombre}</Text>
      <Text style={styles.ocupacion}>{ocupacion}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginBottom: 10,
  },
  nombre: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  ocupacion: {
    fontSize: 14,
    color: '#666',
  },
})
