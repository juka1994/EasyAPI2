import * as personDal from '../dal/Persona'
import { GetAllPersonasFilters } from 'db/dal/types'
import { PersonaInput, PersonaOutput } from 'db/models/Persona'


export const create =  (payload: PersonaInput): Promise<PersonaOutput> =>{
    return personDal.create(payload)
}

export const getById = (id: number): Promise<PersonaOutput> =>{
    return personDal.getById(id)
}

export const update = (id: number, payload: Partial<PersonaInput>): Promise<PersonaOutput> => {
    return personDal.update(id, payload)
}

export const findAll = (filters: GetAllPersonasFilters): Promise<PersonaOutput[]> =>{
    return personDal.getAll(filters)
}

export const deleteById = (id: number): Promise<boolean> =>{
    return personDal.deleteById(id)
}


