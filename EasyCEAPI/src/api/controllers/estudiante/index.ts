import * as service from '../../../db/services/EstudianteService'
import { CreateEstudianteDto, UpdateEstudianteDto } from 'api/dto/estudiante.dto'
import { Estudiante } from '../../interface'
import * as mapper from './mapper'

export const create =async (payload:CreateEstudianteDto): Promise<Estudiante> => {
    return mapper.toEstudiante(await service.create(payload))
}

export const getById =async (id: number): Promise<Estudiante> => {
    return mapper.toEstudiante(await service.findById(id))
}

export const getAll =async (): Promise<Estudiante[]> => {
    return(await service.findAll()).map(mapper.toEstudiante)
}

export const update =async (id: number, payload: CreateEstudianteDto): Promise<Estudiante> => {
    return mapper.toEstudiante(await service.update(id, payload))
}

