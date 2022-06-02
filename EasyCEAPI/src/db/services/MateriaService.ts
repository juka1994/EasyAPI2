import * as subjectDal from '../dal/Materia'
import { MateriaInput, MateriaOutput } from 'db/models/Materia'


export const create =async (payload: MateriaInput): Promise<MateriaOutput> => {
    return await subjectDal.create(payload)
}

export const getById = (id:number): Promise<MateriaOutput> => {
    return subjectDal.getById(id)
}

export const findAll = (): Promise<MateriaOutput[]> => {
    return subjectDal.getAll()
}

export const update =async (id: number, payload: MateriaInput): Promise<MateriaOutput> => {
    return await subjectDal.update(id, payload)
}

