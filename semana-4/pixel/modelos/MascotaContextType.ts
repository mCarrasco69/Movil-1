import { Indicador } from "./Indicador";
import { EntradaBitacora } from "./EntradaBitacora";

export interface MascotaContextType {
    nombre: string;
    indicadores: Indicador[];
    estadoAnimo: string;
    necesitaAyuda: boolean;
    puedeJugar: boolean;
    modoNoche: boolean;
    bitacora: EntradaBitacora[];
    alternarModoNoche: () => void;
    cambiarNombre: (nuevoNombre: string) => void;
    alimentar: () => void;
    jugar: () => void;
    descansar: () => void;
    reiniciar: () => void;
}
