import * as service from '../../../db/services/InscripcionService'
import { CreateInscripcionDto } from 'api/dto/inscripcion.dto'
import { Inscripcion } from '../../interface'
import * as mapper from './mapper'


export const create =async (payload: CreateInscripcionDto): Promise<Inscripcion> => {
    return mapper.toInscripcion(await service.create(payload))
}

export const getById =async (id: number): Promise<Inscripcion> => {
    return mapper.toInscripcion(await service.getById(id))
}

export const getAll =async (): Promise<Inscripcion[]> => {
    return (await service.findAll()).map(mapper.toInscripcion)
}

export const update =async (id:number, payload: CreateInscripcionDto): Promise<Inscripcion> => {
    return mapper.toInscripcion(await service.update(id, payload))
}

