import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Usuario } from '../Models/Usuario'
import UserHeader from './UserHeader'
import UserDetails from './UserDetails'

export default function UserProfile(props: Usuario) {
  return (
    <View style={styles.card}>
      <UserHeader nombre={props.nombre} ocupacion={props.ocupacion} />
      <UserDetails edad={props.edad} ciudad={props.ciudad} />
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#9adcc3',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#6b39e9',
  },
})
