import * as service from '../../../db/services/PersonaService'
import { CreatePersonaDto, UpdatePersonaDto, FilterPersonasDto } from 'api/dto/persona.dto'
import { Persona } from '../../interface'
import * as mapper from './mapper'

export const create =async (payload: CreatePersonaDto): Promise<Persona> => {
    return mapper.toPersona(await service.create(payload))
}

export const getById =async (id:number): Promise<Persona> => {
    return mapper.toPersona(await service.getById(id))
}

export const getAll =async (filters: FilterPersonasDto): Promise<Persona[]> => {
    return (await service.findAll(filters)).map(mapper.toPersona)
}

export const update =async (id:number, payload: CreatePersonaDto): Promise<Persona> => {
    return mapper.toPersona(await service.update(id, payload))
}

export const deleteById =async (idPersona:number): Promise<Boolean> => {
    const isDeleted = await service.deleteById(idPersona)

    return isDeleted
}
