import * as groupDal from'../dal/Grupo'
import { GetAllGruposFilters } from 'db/dal/types'
import { GrupoInput, GrupoOutput } from 'db/models/Grupo'

export const create = (payload: GrupoInput): Promise<GrupoOutput> => {
    return groupDal.create(payload)
}

export const update = (id: number, payload: GrupoInput): Promise<GrupoOutput> => {
    return groupDal.update(id, payload)
}

export const getById = (id: number): Promise<GrupoOutput> => {
    return groupDal.getById(id)
}

export const deleteById = (id: number): Promise<boolean> => {
    return groupDal.deleteById(id)
}

export const findAll = (filters: GetAllGruposFilters): Promise<GrupoOutput[]> => {
    return groupDal.getAll(filters)
}