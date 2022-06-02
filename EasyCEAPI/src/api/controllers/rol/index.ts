import * as service from '../../../db/services/RolService'
import { CreateRolDto } from 'api/dto/rol.dto'
import { Rol } from '../../interface'
import * as mapper from './mapper'


export const create =async (payload: CreateRolDto): Promise<Rol> => {
    return mapper.toRol(await service.create(payload))
}

export const getAll =async (): Promise<Rol[]> => {
    return (await service.findAll()).map(mapper.toRol)
}