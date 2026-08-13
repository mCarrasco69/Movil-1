import { createContext } from "react";
import { MascotaContextType } from "../modelos/MascotaContextType";

//es la plantilla de definicion del contexto de la mascota
export const MascotaContext = createContext<MascotaContextType>({
    nombre: 'Pixel',
    indicadores: [],
    estadoAnimo: 'Normal',
    necesitaAyuda: false,
    puedeJugar: true,
    modoNoche: false,
    bitacora: [],
    alternarModoNoche: () => { },
    cambiarNombre: () => { },
    alimentar: () => { },
    jugar: () => { },
    descansar: () => { },
    reiniciar: () => { },
});
