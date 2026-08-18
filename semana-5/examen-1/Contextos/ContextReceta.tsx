import { createContext } from "react";
import { Receta } from "../Modelos/Receta";


export const ContextReceta = createContext({
    recetas: [] as Receta[],
    recetaSeleccionada: null as Receta | null,
    agregarReceta: (nombre: string, ingredientes: string[], fecha: string) => { },
    eliminarReceta: (numero: number) => { },
    buscarReceta: (numero: number) => { },
    volverALista: () => { },
});
