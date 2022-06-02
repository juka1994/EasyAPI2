import * as service from '../../../db/services/PersonaRolService'
import { CreatePersonaRolDto, UpdatePersonaRolDto } from 'api/dto/personaRol.dto'
import { PersonaRol } from '../../interface'
import * as mapper from './mapper'


export const create =async (payload: CreatePersonaRolDto): Promise<PersonaRol> => {
    return mapper.toPersonaRol(await service.create(payload))
}

export const getById =async (id: number): Promise<PersonaRol> => {
    return mapper.toPersonaRol(await service.getById(id))
}

export const getAll =async (): Promise<PersonaRol[]> => {
    return (await service.findAll()).map(mapper.toPersonaRol)
}

export const update =async (id:number, payload: CreatePersonaRolDto): Promise<PersonaRol> => {
    return mapper.toPersonaRol(await service.update(id, payload))
}

