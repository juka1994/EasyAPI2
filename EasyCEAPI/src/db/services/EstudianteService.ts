import * as estudiantDal from '../dal/Estudiante'
import * as personaRolDal from '../dal/PersonaRol'
import { EstudianteInput, EstudianteOutput } from 'db/models/Estudiante'

export const create = async (payload: EstudianteInput): Promise<EstudianteOutput> => {
    let student = payload.idPersonaRol
    //Devuelve true es estudiante y false no es estudiante
    const checkIsStudent = await personaRolDal.checkIsStudent(student)
    if(checkIsStudent){
        payload.idPersonaRol =  student   
    }else{
        throw new Error ('not student')
    }
    return estudiantDal.create(payload)
}

export const findById = (id: number): Promise<EstudianteOutput> => {
    return estudiantDal.getById(id)
}

export const findAll = (): Promise<EstudianteOutput[]> => {
    return estudiantDal.getAll()
}

export const update = (id:number, payload: Partial<EstudianteInput>): Promise<EstudianteOutput> => {
    return estudiantDal.update(id, payload);
}

