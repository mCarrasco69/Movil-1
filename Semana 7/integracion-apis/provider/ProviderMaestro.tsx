import { View, Text, Alert } from 'react-native'
import React, { useContext, useState } from 'react'
import { ContextMaestro } from '../contextos/ContextMaestro'
import { Maestro } from '../Modelos/Maestro';
import { Clase } from '../Modelos/Clase';
import { Asignacion } from '../Modelos/Asignacion';
import { API_URL } from '../config/api';

interface ViewProps {
    children: React.ReactNode;
}

export default function ProviderMaestro({ children }: ViewProps) {

    const [listaMaestros, setListaMaestros] = useState<Maestro[]>([]);
    const [listaClases, setListaClases] = useState<Clase[]>([]);
    const [listaAsignaciones, setListaAsignaciones] = useState<Asignacion[]>([]);

    const agregarMaestro = async (maestro: Maestro) => {

        try {

            const response = await fetch(`${API_URL}/maestros`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(maestro)
            });
            const data = await response.json();
            console.log(data);
            Alert.alert('Maestro agregado correctamente');

        } catch (error) {
            Alert.alert('Error al agregar el maestro', (error as Error).message);
        }
    }

    const editarMaestro = async (id: string, maestro: Maestro) => {

        try {

            const response = await fetch(`${API_URL}/maestros/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(maestro)
            });
            const data = await response.json();
            console.log(data);
            Alert.alert('Maestro actualizado correctamente');

        } catch (error) {
            Alert.alert('Error al actualizar el maestro', (error as Error).message);
        }
    }

    const eliminarMaestro = async (id: string) => {

        try {

            const response = await fetch(`${API_URL}/maestros/${id}`, {
                method: 'DELETE',
            });
            const data = await response.json();
            console.log(data);
            Alert.alert('Maestro eliminado correctamente');

        } catch (error) {
            Alert.alert('Error al eliminar el maestro', (error as Error).message);
        }
    }

    const agregarClase = async (clase: Clase) => {

        try {

            const response = await fetch(`${API_URL}/clases`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(clase)
            });
            const data = await response.json();
            console.log(data);
            Alert.alert('Clase agregada correctamente');

        } catch (error) {
            Alert.alert('Error al agregar la clase', (error as Error).message);
        }
    }

    const eliminarClase = async (id: string) => {

        try {

            const response = await fetch(`${API_URL}/clases/${id}`, {
                method: 'DELETE',
            });
            const data = await response.json();
            console.log(data);
            Alert.alert('Clase eliminada correctamente');

        } catch (error) {
            Alert.alert('Error al eliminar la clase', (error as Error).message);
        }
    }

    const asignarClase = async (maestroId: string, claseId: string) => {

        try {

            const response = await fetch(`${API_URL}/asignaciones`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ maestroId, claseId })
            });
            const data = await response.json();
            console.log(data);
            Alert.alert('Clase asignada correctamente');

        } catch (error) {
            Alert.alert('Error al asignar la clase', (error as Error).message);
        }
    }

    const eliminarAsignacion = async (id: string) => {

        try {

            const response = await fetch(`${API_URL}/asignaciones/${id}`, {
                method: 'DELETE',
            });
            const data = await response.json();
            console.log(data);
            Alert.alert('Asignacion eliminada correctamente');

        } catch (error) {
            Alert.alert('Error al eliminar la asignacion', (error as Error).message);
        }
    }

    const buscarMaestrosPorClase = async (claseId: string) => {

        try {

            const response = await fetch(`${API_URL}/maestros/clase/${claseId}`);
            const data = await response.json();
            setListaMaestros(data);
            return data;

        } catch (error) {
            Alert.alert('Error al buscar maestros por clase', (error as Error).message);
        }
    }

    return (
        <ContextMaestro.Provider value={{
            listaMaestros, setListaMaestros, agregarMaestro, editarMaestro, eliminarMaestro,
            listaClases, setListaClases, agregarClase, eliminarClase,
            listaAsignaciones, setListaAsignaciones, asignarClase, eliminarAsignacion,
            buscarMaestrosPorClase
        }}>
            {children}
        </ContextMaestro.Provider>
    )
}

export const useContextMaestro = () => {
    return useContext(ContextMaestro);
}
