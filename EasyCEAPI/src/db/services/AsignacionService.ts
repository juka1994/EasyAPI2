import * as assignmentDal from '../dal/Asignacion'
import { AsignacionInput, AsignacionOutput } from 'db/models/Asignacion'


export const create = (payload: AsignacionInput): Promise<AsignacionOutput> => {
    return assignmentDal.create(payload)
}

export const getById = (id: number): Promise<AsignacionOutput> => {
    return  assignmentDal.getById(id)
}

export const getAll =(): Promise<AsignacionOutput[]> => {
    return assignmentDal.getAll()
}

export const update = (id: number, payload: AsignacionInput): Promise<AsignacionOutput> => {
    return assignmentDal.update(id, payload)
}