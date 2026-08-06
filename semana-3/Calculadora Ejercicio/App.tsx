import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { calculateExercises } from './componentes/calculateExercises';
import { ResultadoEjercicios } from './Modelos/ResultadoEjercicios';
import ResultadoEjerciciosComponent from './componentes/ResultadoEjerciciosComponent';

export default function App() {

  const [resultadoEjercicios, setResultadoEjercicios] = useState<ResultadoEjercicios | null>(null)

  useEffect(()=>{
      const horasDiarias = [3, 0, 2, 4.5, 0, 3, 1];
      const objetivo = 2;
      const resultado = calculateExercises(horasDiarias, objetivo);
      setResultadoEjercicios(resultado);
      console.log('Resultado ejercicios:', resultado);
  },[]);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cálculo de Ejercicios</Text>

      {resultadoEjercicios && (
        <ResultadoEjerciciosComponent resultado={resultadoEjercicios} />
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ae94',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
