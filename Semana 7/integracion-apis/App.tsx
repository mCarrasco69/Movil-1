import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavDrawer from './componentes/NavDrawer';
import ProviderMaestro from './provider/ProviderMaestro';

export default function App() {
  return (

    <ProviderMaestro>
      <NavDrawer />
    </ProviderMaestro>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
