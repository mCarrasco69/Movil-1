import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import UserProfile from './Components/UserProfile';
import { Usuario } from './Models/Usuario';

export default function App() {

  const usuario1: Usuario = {
    nombre: 'noemi servellon',
    edad: 22,
    ciudad: 'tegucigalpa',
    ocupacion: 'estudiante'
  };

  const usuario2: Usuario = {
    nombre: 'Esther abadie',
    edad: 27,
    ciudad: 'tegucigalpa',
    ocupacion: 'Medica'
  };

  const usuario3: Usuario = {
    nombre: 'jose martinez',
    edad: 27,
    ciudad: 'tegucigalpa ',
    ocupacion: 'PAPI DE LAS 2'
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Perfiles de Usuario</Text>

      <UserProfile
        nombre={usuario1.nombre}
        edad={usuario1.edad}
        ciudad={usuario1.ciudad}
        ocupacion={usuario1.ocupacion}
      />

      <UserProfile
        nombre={usuario2.nombre}
        edad={usuario2.edad}
        ciudad={usuario2.ciudad}
        ocupacion={usuario2.ocupacion}
      />

      <UserProfile
        nombre={usuario3.nombre}
        edad={usuario3.edad}
        ciudad={usuario3.ciudad}
        ocupacion={usuario3.ocupacion}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efeaea',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
});
