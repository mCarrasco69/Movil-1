import { View, StyleSheet } from 'react-native'
import React, { useContext, useState } from 'react'
import { ViewReact } from '../modelos/ViewReact'
import { Indicador } from '../modelos/Indicador'
import { EntradaBitacora } from '../modelos/EntradaBitacora'
import { MascotaContextType } from '../modelos/MascotaContextType'
import { MascotaContext } from '../Contextos/MascotaContext'

//componente que mantiene el estado de la mascota y lo exporta via contexto
//usa el hook useMascota para consumirlo

const VALOR_INICIAL = 60;
const LIMITE_MIN = 0;
const LIMITE_MAX = 100;

function crearIndicadoresIniciales(): Indicador[] {
    return [
        { nombre: 'Alimento', valor: VALOR_INICIAL },
        { nombre: 'Energía', valor: VALOR_INICIAL },
        { nombre: 'Ánimo', valor: VALOR_INICIAL },
    ];
}

function clamp(valor: number): number {
    if (valor < LIMITE_MIN) return LIMITE_MIN;
    if (valor > LIMITE_MAX) return LIMITE_MAX;
    return valor;
}

function obtenerHora(): string {
    return new Date().toLocaleTimeString();
}

export default function MascotaProvider({ children }: ViewReact) {

    const [nombre, setNombre] = useState<string>('Pixel');
    const [indicadores, setIndicadores] = useState<Indicador[]>(crearIndicadoresIniciales());
    const [modoNoche, setModoNoche] = useState<boolean>(false);
    const [bitacora, setBitacora] = useState<EntradaBitacora[]>([]);

    //valores derivados
    let energia = indicadores.find(i => i.nombre === 'Energía')?.valor ?? VALOR_INICIAL;
    let minimo = Math.min(...indicadores.map(i => i.valor));

    let necesitaAyuda: boolean = indicadores.some(i => i.valor === 0);
    let puedeJugar: boolean = energia >= 15;

    let estadoAnimo: string;
    if (minimo === 0) {
        estadoAnimo = 'Crítico';
    } else if (minimo >= 70) {
        estadoAnimo = 'Feliz';
    } else if (minimo >= 35) {
        estadoAnimo = 'Normal';
    } else {
        estadoAnimo = 'Decaído';
    }

    function agregarEntradaBitacora(mensaje: string) {
        let entrada: EntradaBitacora = {
            id: Date.now(),
            mensaje: mensaje,
            hora: obtenerHora(),
        }
        setBitacora(lista => [entrada, ...lista]);
    }

    function aplicarCambios(deltaAlimento: number, deltaEnergia: number, deltaAnimo: number) {
        setIndicadores(lista =>
            lista.map(ind => {
                if (ind.nombre === 'Alimento') return { ...ind, valor: clamp(ind.valor + deltaAlimento) };
                if (ind.nombre === 'Energía') return { ...ind, valor: clamp(ind.valor + deltaEnergia) };
                if (ind.nombre === 'Ánimo') return { ...ind, valor: clamp(ind.valor + deltaAnimo) };
                return ind;
            })
        );
    }

    function alimentar() {
        //Alimento +20, Energía -5, Ánimo +5
        aplicarCambios(20, -5, 5);
        agregarEntradaBitacora('Comió un pescadito');
    }

    function jugar() {
        //Alimento -10, Energía -15, Ánimo +20
        if (!puedeJugar) return;
        aplicarCambios(-10, -15, 20);
        agregarEntradaBitacora('Pixel jugó y está feliz');
    }

    function descansar() {
        //Alimento -10, Energía +25 (o +40 en modo noche), Ánimo -5
        let descansoEnergia = modoNoche ? 40 : 25;
        aplicarCambios(-10, descansoEnergia, -5);
        agregarEntradaBitacora(modoNoche ? 'Pixel durmió plácidamente (modo noche)' : 'Pixel descansó un rato');
    }

    function reiniciar() {
        setIndicadores(crearIndicadoresIniciales());
        setBitacora([]);
        setModoNoche(false);
        setNombre('Pixel');
    }

    function alternarModoNoche() {
        setModoNoche(actual => !actual);
    }

    function cambiarNombre(nuevoNombre: string) {
        let nombreLimpio = nuevoNombre.trim();
        if (nombreLimpio.length === 0) return;
        setNombre(nombreLimpio);
    }

    let contexto: MascotaContextType = {
        nombre,
        indicadores,
        estadoAnimo,
        necesitaAyuda,
        puedeJugar,
        modoNoche,
        bitacora,
        alternarModoNoche,
        cambiarNombre,
        alimentar,
        jugar,
        descansar,
        reiniciar,
    };

    return (
        <View style={styles.contenedor}>
            <MascotaContext.Provider value={contexto}>
                {children}
            </MascotaContext.Provider>
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
    },
});

export const useMascota = () => {
    return useContext(MascotaContext);
}
