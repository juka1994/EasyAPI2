import { PersonaRol} from '../models'
import { PersonaRolInput, PersonaRolOutput} from '../models/PersonaRol'
import {isEmpty} from 'lodash'

export const create =async (payload: PersonaRolInput): Promise<PersonaRolOutput> => {
    const personRole = await PersonaRol.create(payload)

    return personRole
}

export const getById =  async (id:number): Promise<PersonaRolOutput> => {
    const personRole = await PersonaRol.findByPk(id)
    if(!personRole){
        throw new Error('not found')
    }
    return personRole
}

export const getAll =async (): Promise<PersonaRolOutput[]> => {
    const personRole = await PersonaRol.findAll()
    return personRole
}

export const update = async (id: number, payload: PersonaRolInput): Promise<PersonaRolOutput>  => {
    const personRole = await PersonaRol.findByPk(id)

    if(!personRole){
        throw new Error('not found')
    }
    const personRoleUpdate = await personRole.update(payload)
    return personRoleUpdate
}

export const checkIsStudent =async (idPersonaRol: number): Promise<boolean> => {
    const personRoleIsStudent = await PersonaRol.findOne({
        where: {idPersonaRol: idPersonaRol,
                idRol: 1
        }
    })
  //Esta vacio no entonces es se niega y es true(es estudiante)
  //Esta vacio si entonces es se niega y es false (no es estudiante)
    return !isEmpty(personRoleIsStudent)
}

export const checkIsTeacher =async (idPersonaRol: number): Promise<boolean> => {
    const personRoleIsTeacher = await PersonaRol.findOne({
        where:{
            idPersonaRol: idPersonaRol,
            idRol: 2
        }
    })
    //Esta vacio no entonces se niega y es true(es maestro)
    //Esta vacio si entonces se niega y es false( no es maestro)
    return !isEmpty(personRoleIsTeacher)
}