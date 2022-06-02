import { Asignacion } from '../models'
import { AsignacionInput, AsignacionOutput } from 'db/models/Asignacion'


export const create =async (payload: AsignacionInput): Promise<AsignacionOutput> => {
    const assignment = await Asignacion.create(payload)

    return assignment
}

export const getById =async (id: number): Promise<AsignacionOutput>  => {
    const assignment = await Asignacion.findByPk(id)
    if(!assignment){
        throw new Error('not found')
    }
    return assignment
}

export const getAll =async (): Promise<AsignacionOutput[]> => {
    const result = await Asignacion.findAll()
    return result
}

export const update =async (id: number, payload: AsignacionInput): Promise<AsignacionOutput> => {
    const assignment = await Asignacion.findByPk(id)
    if(!assignment){
        throw new Error('not found')
    }
    const assignmentUpdate = assignment.update(payload)
    return assignmentUpdate
}