import { createContext } from "react";
import { Estudiante } from "../modelos/Estudiante";

export const ContextEstudiante = createContext({
    estudiantes: [] as Estudiante[],
    agregarEstudiante: (name: string) => { },
});
