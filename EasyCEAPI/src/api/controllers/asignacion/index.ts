import * as service from '../../../db/services/AsignacionService'
import { CreateAsignacionDto, UpdateAsignacionDto } from 'api/dto/asignacion.dto'
import { Asignacion } from '../../interface'
import * as mapper from './mapper'

export const create =async (payload: CreateAsignacionDto): Promise<Asignacion> => {
    return mapper.toAsignacion(await service.create(payload))
}

export const getById =async (id: number): Promise<Asignacion> => {
    return mapper.toAsignacion(await service.getById(id))
}

export const getAll =async (): Promise<Asignacion[]> => {
    return (await service.getAll()).map(mapper.toAsignacion)
}

export const update =async (id: number, payload: CreateAsignacionDto): Promise<Asignacion> => {
    return mapper.toAsignacion(await service.update(id, payload))
}