import { Inscripcion } from '../models'
import { InscripcionInput, InscripcionOutput } from 'db/models/Inscripcion'



export const create =async (payload: InscripcionInput): Promise<InscripcionOutput> => {
    const inscription = await Inscripcion.create(payload)

    return inscription
}

export const getById=async (id: number): Promise<InscripcionOutput> => {
    const inscription = await Inscripcion.findByPk(id)
    if(!inscription){
        throw new Error('not found')
    }
    return inscription
}

export const getAll =async (): Promise<InscripcionOutput[]> => {
    const inscription = await Inscripcion.findAll()
    return inscription
}

export const update =async (id:number, payload: InscripcionInput): Promise<InscripcionOutput> => {
   const  inscription = await Inscripcion.findByPk(id)
   console.log(inscription)
   console.log(payload)
    if(!inscription){
        throw new Error('not found')
    }
    const inscriptionUpdate = inscription.update(payload)

    return inscriptionUpdate

}

