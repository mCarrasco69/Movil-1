import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import MascotaProvider from './Providers/MascotaProvider';
import Cabecera from './Consumidores/Cabecera';
import ModoNoche from './Consumidores/ModoNoche';
import Indicadores from './Consumidores/Indicadores';
import PanelAcciones from './Consumidores/PanelAcciones';
import Bitacora from './Consumidores/Bitacora';

export default function App() {
  return (
    <MascotaProvider>
      <ScrollView style={styles.container}>
        <Text style={styles.titulo}>Pixel</Text>

        <Cabecera />

        <ModoNoche />

        <Indicadores />

        <PanelAcciones />

        <Bitacora />

        <StatusBar style="auto" />
      </ScrollView>
    </MascotaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
});
