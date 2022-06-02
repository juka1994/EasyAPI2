import * as service from '../../../db/services/MaestroService'
import { CreateMaestroDto } from '../../dto/maestro.dto'
import { Maestro } from '../../interface'
import * as mapper from './mapper'

export const create =async (payload: CreateMaestroDto): Promise<Maestro> => {
    return mapper.toMaestro(await service.create(payload))
}

export const getById =async (id: number): Promise<Maestro> => {
    return mapper.toMaestro(await service.findById(id))
}

export const getAll =async (): Promise<Maestro[]> => {
    return(await service.findAll()).map(mapper.toMaestro)
}

export const update =async (id: number, payload: CreateMaestroDto): Promise<Maestro> => {
    return mapper.toMaestro(await service.update(id, payload))
}

