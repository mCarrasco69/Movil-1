import { View, Alert } from 'react-native'
import React, { useContext, useState } from 'react'
import { ReactNode } from 'react'
import { Receta } from '../Modelos/Receta'
import { ContextReceta } from '../Contextos/ContextReceta'

export default function ProviderReceta({ children }: { children: ReactNode }) {

    const [recetas, setRecetas] = useState<Receta[]>([]);
    const [recetaSeleccionada, setRecetaSeleccionada] = useState<Receta | null>(null);

    const agregarReceta = (nombre: string, ingredientes: string[], fecha: string) => {

        let receta: Receta = {
            numero: recetas.length + 1,
            nombre: nombre,
            ingredientes: ingredientes,
            fecha: fecha,
        }

        setRecetas([...recetas, receta]);
    }

    const eliminarReceta = (numero: number) => {
        setRecetas(recetas.filter(receta => receta.numero !== numero));
    }

    const buscarReceta = (numero: string) => {

        let encontrada = recetas.filter(receta => receta.numero.toString() === numero)[0];

        if (encontrada == undefined) {
            Alert.alert('No existe una receta con el numero ' + numero);
            return
        }

        setRecetaSeleccionada(encontrada);
    }

    const volverALista = () => {
        setRecetaSeleccionada(null);
    }

    return (
        <View style={{ flex: 1 }}>
            <ContextReceta.Provider value={{ recetas, recetaSeleccionada, agregarReceta, eliminarReceta, buscarReceta, volverALista }}>
                {children}
            </ContextReceta.Provider>
        </View>
    )
}

export const useReceta = () => {
    return useContext(ContextReceta);
}
