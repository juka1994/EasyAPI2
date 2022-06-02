import * as teacherDal from '../dal/Maestro'
import * as personRoleDa from '../dal/PersonaRol'
import { MaestroInput, MaestroOutput } from '../models/Maestro'

export const create = async (payload : MaestroInput): Promise<MaestroOutput> => {
    let teacher = payload.idPersonaRol
    const personaRolIsTeacher = await personRoleDa.checkIsTeacher(teacher)

    if(personaRolIsTeacher){
        payload.idPersonaRol = teacher
    }else{
        throw new Error ('not teacher')
    }
    return await teacherDal.create(payload)
}

export const findById = (id: number): Promise<MaestroOutput> => {
    return teacherDal.getById(id)
}

export const findAll = (): Promise<MaestroOutput[]> => {
    return teacherDal.getAll()
}

export const update = (id:number, payload: Partial<MaestroInput>): Promise<MaestroOutput> => {
    return  teacherDal.update(id, payload);
}

