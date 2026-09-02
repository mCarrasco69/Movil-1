import { createContext } from "react";
import { Maestro } from "../Modelos/Maestro";
import { Clase } from "../Modelos/Clase";
import { Asignacion } from "../Modelos/Asignacion";

export const ContextMaestro = createContext({

    listaMaestros: [] as Maestro[],
    setListaMaestros: (maestros: Maestro[]) => { },
    agregarMaestro: (maestro: Maestro) => { },
    editarMaestro: (id: string, maestro: Maestro) => { },
    eliminarMaestro: (id: string) => { },

    listaClases: [] as Clase[],
    setListaClases: (clases: Clase[]) => { },
    agregarClase: (clase: Clase) => { },
    eliminarClase: (id: string) => { },

    listaAsignaciones: [] as Asignacion[],
    setListaAsignaciones: (asignaciones: Asignacion[]) => { },
    asignarClase: (maestroId: string, claseId: string) => { },
    eliminarAsignacion: (id: string) => { },

    buscarMaestrosPorClase: (claseId: string) => { },
})
