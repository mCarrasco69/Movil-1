import { ScrollView, StyleSheet, Text } from 'react-native';
import ProviderEstudiante from './Providers/ProviderEstudiante';
import ConsumidorEstudiante from './Consumidores/ConsumidorEstudiante';
import ConsumidorListaEstudiante from './Consumidores/ConsumidorListaEstudiante';

export default function App() {
  return (
    <ScrollView style={styles.container}>
    

      <ProviderEstudiante>
        <ConsumidorListaEstudiante />
        <ConsumidorEstudiante />
      </ProviderEstudiante>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
});
