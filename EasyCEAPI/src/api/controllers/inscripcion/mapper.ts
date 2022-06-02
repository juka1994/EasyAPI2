import { Inscripcion } from '../../interface/inscripcion.interface'
import { InscripcionOutput } from 'db/models/Inscripcion'


export const toInscripcion = (inscripcion: InscripcionOutput): Inscripcion =>{
    return{
        idInscripcion: inscripcion.idInscripcion,
        Fecha: inscripcion.Fecha,
        idCiclo: inscripcion.idCiclo,
        idEstudiante: inscripcion.idEstudiante,
        idGrado: inscripcion.idGrado,
        createdAt: inscripcion.createdAt,
        updatedAt: inscripcion.updatedAt
    }
}