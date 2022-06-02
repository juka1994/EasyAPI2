import { Grado } from '../models'
import { Op } from 'sequelize'
import { GradoInput, GradoOutput } from '../models/Grado'
import { GetAllGradosFilters } from './types'

export const create =async (payload: GradoInput): Promise<GradoOutput> => {
    const grade = await Grado.create(payload)

    return grade
}

export const getById =async (id: number): Promise<GradoOutput> => {
    const grade = await Grado.findByPk(id);
    if(!grade){
        throw new Error('not fonund')
    }
    return grade
}

export const getAll =async (filters: GetAllGradosFilters): Promise<GradoOutput[]> => {
    return await Grado.findAll({
        where:{
            ...(filters?.isDeleted && {deleteAt: {[Op.not]: null}} )
        },
        ...((filters?.isDeleted || filters?.includeDeleted) && {paranoid: true})
    })
    
}

export const update =async (id:number, payload: GradoInput): Promise<GradoOutput> => {
    const grade = await Grado.findByPk(id);

    if(!grade){
        throw new Error('not found')
    }

    const gradeUpdate = await grade.update(payload);
    return gradeUpdate
}

export const deleteById =async (id: number): Promise<boolean> => {
    const deleteGrade = await Grado.destroy({
        where:{ idGrado: id}
    })
    return !!deleteGrade
}

