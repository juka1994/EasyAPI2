import { Router, Request, Response } from "express";
import * as personaController from '../controllers/persona'
import { CreatePersonaDto, FilterPersonasDto, UpdatePersonaDto } from "api/dto/persona.dto";

const personRouter = Router()

personRouter.post('/',async (req:Request, res: Response) => {
    try {
        const payload: CreatePersonaDto = req.body

        const result = await personaController.create(payload)
        return res.status(200).send(result)
    } catch (error) {
        console.log(error)
    }
    
})

personRouter.get('/:id',async (req:Request, res: Response) => {
    const idPersona = Number(req.params.id)

    const result = await personaController.getById(idPersona)
    return res.status(200).send(result)
    
})

personRouter.get('/', async (req: Request, res: Response) => {
    const filters: FilterPersonasDto = req.query
    
    const result = await personaController.getAll(filters)
    return res.status(200).send(result)
})

personRouter.put('/:id',async (req:Request, res: Response) => {
    const idPersona = Number(req.params.id)
    const payload: CreatePersonaDto = req.body
    const result = await personaController.update(idPersona, payload)

    return res.status(201).send(result)
    
})

personRouter.delete('/:id',async (req: Request, res: Response) => {
    const idPersona = Number(req.params.id)
    const result = await personaController.deleteById(idPersona)
    return res.status(201).send({
        success: result
    })
})

export default personRouter