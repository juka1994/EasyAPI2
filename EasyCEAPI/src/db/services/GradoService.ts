import * as gradeDal from '../dal/Grado'
import { GetAllGradosFilters } from 'db/dal/types'
import { GradoInput, GradoOutput } from '../models/Grado'

export const create = (payload: GradoInput): Promise<GradoOutput> => {
    return gradeDal.create(payload)
}

export const getById = (id:number): Promise<GradoOutput> => {
    return gradeDal.getById(id)
}

export const findAll = (filters:GetAllGradosFilters): Promise<GradoOutput[]> => {
    return gradeDal.getAll(filters)
}

export const updadate = (id: number, payload: GradoInput): Promise<GradoOutput> => {
    return gradeDal.update(id,payload)
}

export const deleteById = (id:number): Promise<boolean> => {
    return gradeDal.deleteById(id)
}

