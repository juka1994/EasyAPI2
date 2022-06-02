import { Materia } from "../models";
import { MateriaInput, MateriaOutput } from "../models/Materia";

export const create = async (payload: MateriaInput): Promise<MateriaOutput> => {
    const subject = await Materia.create(payload)

    return subject
}

export const getById =async (id: number): Promise<MateriaOutput> => {
    const subject = await Materia.findByPk(id)

    if(!subject){
        throw new Error('not found')
    }
    return subject
}

export const getAll =async (): Promise<MateriaOutput[]> => {
    return await Materia.findAll()
}

export const update =async (id: number, payload: MateriaInput): Promise<MateriaOutput> => {
    const subject = await Materia.findByPk(id)

    if(!subject){
        throw new Error('not found')
    }
    const subjectUpdate = await subject.update(payload)
    return subjectUpdate
}

