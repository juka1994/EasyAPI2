import * as service from '../../../db/services/GrupoService'
import { CreateGrupoDto, FilterGrupoDto, UpdateGrupoDto } from 'api/dto/grupo.dto'
import { Grupo } from '../../interface'
import * as mapper from './mapper'

export const create = async (payload: CreateGrupoDto): Promise<Grupo> => {
    return mapper.toGrupo(await service.create(payload))
}

export const getById =async (id: number): Promise<Grupo> => {
    return mapper.toGrupo(await service.getById(id))
}

export const getAll =async (filters: FilterGrupoDto): Promise<Grupo[]> => {
    return (await service.findAll(filters)).map(mapper.toGrupo)
}

export const update  =async (id: number, payload: CreateGrupoDto): Promise<Grupo> => {
    return mapper.toGrupo(await service.update(id, payload))
} 

export const deleteById =async (id: number): Promise<boolean> => {
    const isDeleted = await service.deleteById(id)

    return isDeleted
}

