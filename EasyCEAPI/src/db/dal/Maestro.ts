import { Maestro } from '../models'
import { MaestroInput, MaestroOutput } from '../models/Maestro'

export const create =async (payload: MaestroInput): Promise<MaestroOutput> => {
    const teacher = await Maestro.create(payload);

    return teacher
}

export const getById =async (id: number): Promise<MaestroOutput> => {
    const teacher = await Maestro.findByPk(id)

    if(!teacher){
        throw new Error('not found')
    }
    return teacher
}

export const getAll =async (): Promise<MaestroOutput[]>=> {
    const teacher = await Maestro.findAll()
    return teacher
}

export const update =async (id: number, payload: Partial<MaestroInput>): Promise<MaestroOutput> => {
    const teacher = await Maestro.findByPk(id)

    if(!teacher){
        throw new Error('not found')
    }

    const teacherUpdate = await teacher.update(payload)

    return teacherUpdate
    
}
