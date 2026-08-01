import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function UserDetails({ edad, ciudad }: { edad: number, ciudad: string }) {
  return (
    <View style={styles.details}>
      <Text>Edad: {edad} años</Text>
      <Text>Ciudad: {ciudad}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  details: {
    alignItems: 'center',
  },
})
