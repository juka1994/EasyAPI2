import { Grupo } from '../models'
import { Op } from 'sequelize'
import { GrupoInput, GrupoOutput } from 'db/models/Grupo'
import { GetAllGruposFilters } from './types'


export const create =async (payload: GrupoInput): Promise<GrupoOutput> => {
    const group = await Grupo.create(payload)

    return group
}

export const getById =async (id: number): Promise<GrupoOutput> => {
    const group = await Grupo.findByPk(id)
    if(!group){
        throw new Error('not found')
    }

    return group
}

export const getAll =async (filters: GetAllGruposFilters): Promise<GrupoOutput[]> => {
    return await Grupo.findAll({
        where:{
            ...(filters?.isDeleted && {deleteAt: {[Op.not]: null}})
        },
        ...((filters?.isDeleted || filters?.includeDeleted) && {paranoid: true})
    })
}

export const update =async (id: number, payload: GrupoInput): Promise<GrupoOutput> => {
    const group = await Grupo.findByPk(id)

    if(!group){
        throw new Error('not found')
    }

    const groupUpdate = await group.update(payload)
    return groupUpdate
}

export const deleteById =async (id: number): Promise<boolean> => {
    const deleteGroup = await Grupo.destroy({
        where: {idGrupo: id}
    })
    return !!deleteGroup
}
