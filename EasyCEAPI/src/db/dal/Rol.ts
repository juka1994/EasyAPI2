import { Rol } from '../models'
import { RolInput, RolOutput } from 'db/models/Rol'


export const create =async (payload: RolInput): Promise<RolOutput> => {
    const role = await Rol.create(payload)
    return role
}

export const getAll =async (): Promise<RolOutput[]> => {
    const role = await Rol.findAll()
    return role
}