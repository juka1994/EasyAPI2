import { Op } from 'sequelize'
import { Persona } from '../models'
import { GetAllPersonasFilters } from './types'
import { PersonaInput, PersonaOutput } from '../models/Persona'

export const create = async (payload: PersonaInput): Promise<PersonaOutput> =>{
    const person = await Persona.create(payload)

    return person
}

export const getById = async (id: number): Promise<PersonaOutput> => {
    const person = await Persona.findByPk(id)

    if(!person){
        throw new Error('not found')
    }
    return person
}

export const getAll =async (filters?: GetAllPersonasFilters): Promise<PersonaOutput[]> => {
    return await Persona.findAll({
        where:{
            ...(filters?.isDeleted && {deletedAt: {[Op.not]: null}})
        },
        ...((filters?.isDeleted || filters?.includeDeleted) && {paranoid: true})
    })
}

export const update = async (id: number, payload: Partial<PersonaInput>): Promise<PersonaOutput> =>{
    const person = await Persona.findByPk(id)
    if(!person){
        throw new Error('not found')
    }

    const personUpdate = await person.update(payload)
    return personUpdate
}

export const deleteById =async (id: number): Promise<boolean> => {
    const personDelete = await Persona.destroy({
        where: {idPersona : id}
    })
    return !!personDelete
}

