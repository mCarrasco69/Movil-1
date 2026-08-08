import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet } from 'react-native';
import FormularioComponent from './Componentes/FormularioComponent';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      <FormularioComponent />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    marginTop: 40,
  },
});
