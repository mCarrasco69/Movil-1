import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text } from 'react-native';
import ProviderReceta from './Providers/ProviderReceta';
import FormularioReceta from './Componentes/FormularioReceta';
import BuscarReceta from './Componentes/BuscarReceta';
import ListaRecetas from './Componentes/ListaRecetas';
import DetalleReceta from './Componentes/DetalleReceta';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Recetas Culinarias</Text>

      <ProviderReceta>
        <FormularioReceta />
        <BuscarReceta />
        <ListaRecetas />
        <DetalleReceta />
      </ProviderReceta>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
});
