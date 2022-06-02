import * as inscriptionDal from '../dal/Inscripcion'
import { InscripcionInput, InscripcionOutput } from 'db/models/Inscripcion'


export const create = (payload:InscripcionInput): Promise<InscripcionOutput> => {
    return inscriptionDal.create(payload)
}

export const getById = (id:number): Promise<InscripcionOutput> => {
    return inscriptionDal.getById(id)
}

export const findAll = (): Promise<InscripcionOutput[]> => {
    return inscriptionDal.getAll()
}

export const update = (id:number, payload: InscripcionInput): Promise<InscripcionOutput> => {
    return inscriptionDal.update(id, payload)
}

