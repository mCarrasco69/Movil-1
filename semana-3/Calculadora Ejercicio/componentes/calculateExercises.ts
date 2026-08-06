import { ResultadoEjercicios } from "../Modelos/ResultadoEjercicios";

export function calculateExercises(horasDiarias: number[], objetivo: number): ResultadoEjercicios {
    const diasPeriodo = horasDiarias.length;
    const diasEntrenamiento = horasDiarias.filter(h => h > 0).length;
    const totalHoras = horasDiarias.reduce((suma, h) => suma + h, 0);
    const promedio = totalHoras / diasPeriodo;
    const objetivoAlcanzado = promedio >= objetivo;

    const niveles = [
        { limite: objetivo * 1.5, calificacion: 3, descripcion: 'Excelente, superaste ampliamente el objetivo' },
        { limite: objetivo, calificacion: 2, descripcion: 'Buen trabajo, alcanzaste el objetivo' },
        { limite: 0, calificacion: 1, descripcion: 'Necesitas mejorar, no alcanzaste el objetivo' },
    ];

    const nivel = niveles.find(n => promedio >= n.limite) ?? niveles[niveles.length - 1];
    const calificacion = nivel.calificacion;
    const descripcionCalificacion = nivel.descripcion;

    return {
        diasPeriodo,
        diasEntrenamiento,
        objetivo,
        promedio: Math.round(promedio * 100) / 100,
        objetivoAlcanzado,
        calificacion,
        descripcionCalificacion
    };
}
