import { Router, Request, Response } from "express";
import * as personaRolController from '../controllers/personaRol'
import { CreatePersonaRolDto, UpdatePersonaRolDto } from "api/dto/personaRol.dto";

const personRoleRouter = Router()

personRoleRouter.post('/',async (req: Request, res: Response) => {
    const personaRol: CreatePersonaRolDto = req.body

    const result = await personaRolController.create(personaRol)
    return res.status(200).send(result)
})

personRoleRouter.get('/:id',async (req: Request, res: Response) => {
    const idPersonaRol = Number(req.params.id)

    const result = await personaRolController.getById(idPersonaRol)
    return res.status(200).send(result)
})

personRoleRouter.get('/',async (req: Request, res: Response) => {
    const result = await personaRolController.getAll()

    return res.status(200).send(result) 
})

personRoleRouter.put('/:id',async (req: Request, res: Response) => {
    const idPersonaRol = Number(req.params.id)
    const personaRol: CreatePersonaRolDto = req.body

    const result = await personaRolController.update(idPersonaRol, personaRol)
    res.status(201).send(result)
})



export default personRoleRouter