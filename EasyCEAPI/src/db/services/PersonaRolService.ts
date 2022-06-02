import * as personRole from '../dal/PersonaRol'
import { PersonaRolInput, PersonaRolOutput } from 'db/models/PersonaRol'


export const create = (payload: PersonaRolInput): Promise<PersonaRolOutput>  => {
    return personRole.create(payload)
}

export const getById = (id:number): Promise<PersonaRolOutput> => {
    return personRole.getById(id)
}

export const findAll = (): Promise<PersonaRolOutput[]> => {
    return personRole.getAll()
}

export const update = (id: number, payload: PersonaRolInput): Promise<PersonaRolOutput> => {
    return personRole.update(id, payload)
}

