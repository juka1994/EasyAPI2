import {Asignacion} from '../../interface/asignacion.interface'
import { AsignacionOutput } from 'db/models/Asignacion'


export const toAsignacion = (assignment: AsignacionOutput): Asignacion =>{
    return{
        idAsignacion: assignment.idAsignacion,
        Fecha: assignment.Fecha,
        idCiclo: assignment.idCiclo,
        idMateria: assignment.idMateria, 
        idMaestro: assignment.idMaestro,
        createdAt: assignment.createdAt,
        updatedAt: assignment.updatedAt
    }
}