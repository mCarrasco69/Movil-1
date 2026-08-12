import { View } from 'react-native'
import React, { useContext, useState } from 'react'
import { ViewReact } from '../modelos/ViewReact'
import { Estudiante } from '../modelos/Estudiante'
import { ContextEstudiante } from '../Contextos/ContexEstudiante'

export default function ProviderEstudiante({ children }: ViewReact) {

    const [estudiantes, setEstudiantes] = useState<Estudiante[]>([
        { id: '1', name: 'mario' },
        { id: '2', name: 'maría' },
        { id: '3', name: 'yoselin' },
        { id: '4', name: 'ana' },
        { id: '5', name: 'ruth' },
        { id: '6', name: 'esther' },
        { id: '7', name: 'jorge' },
        { id: '8', name: 'sofía' },
        { id: '9', name: 'jeniffer' },
        { id: '10', name: 'elena' },
    ]);

    const agregarEstudiante = (name: string) => {
        const nuevoId = (estudiantes.length + 1).toString();
        setEstudiantes([...estudiantes, { id: nuevoId, name }]);
    }

    return (
        <View>
            <ContextEstudiante.Provider value={{ estudiantes, agregarEstudiante }}>
                {children}
            </ContextEstudiante.Provider>
        </View>
    )
}

export const useEstudiante = () => {
    return useContext(ContextEstudiante);
}
