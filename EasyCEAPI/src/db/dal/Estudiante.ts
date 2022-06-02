import { Estudiante } from '../models'
import { EstudianteInput, EstudianteOutput } from '../models/Estudiante'

export const create =async (payload: EstudianteInput): Promise<EstudianteOutput> => {
    const student = await Estudiante.create(payload)

    return student
}

export const getById =async (id: number): Promise<EstudianteOutput> => {
    const student = await Estudiante.findByPk(id)

    if(!student){
        throw new Error('not found')
    }
    return student
}

export const getAll =async (): Promise<EstudianteOutput[]>=> {
    const student = await Estudiante.findAll()
    return student
}

export const update =async (id: number, payload: Partial<EstudianteInput>): Promise<EstudianteOutput> => {
    const student = await Estudiante.findByPk(id)

    if(!student){
        throw new Error('not found')
    }

    const studentUpdate = await student.update(payload)

    return studentUpdate
    
}



