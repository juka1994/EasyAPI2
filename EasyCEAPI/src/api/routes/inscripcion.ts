import * as inscriptionController from '../controllers/inscripcion'
import { CreateInscripcionDto, UpdateInscripcionDto } from 'api/dto/inscripcion.dto'
import { Router, Request, Response } from 'express'

const inscriptionRouter = Router()

inscriptionRouter.post('/',async (req: Request, res: Response) => {
    const payload: CreateInscripcionDto = req.body

    const result = await inscriptionController.create(payload)
    return res.status(200).send(result)
})

inscriptionRouter.get('/:id',async (req: Request, res: Response) => {
    const idInscripcion = Number(req.params.id)
    const result = await inscriptionController.getById(idInscripcion)
    return res.status(200).send(result)
})

inscriptionRouter.get('/',async (req: Request, res: Response) => {
    const result = await inscriptionController.getAll()
    return res.status(200).send(result)
})

inscriptionRouter.put('/:id',async (req: Request, res: Response) => {
    const idInscripcion = Number(req.params.id)
    const inscripcionUpdate: CreateInscripcionDto = req.body
    const result = await inscriptionController.update(idInscripcion, inscripcionUpdate)

    return res.status(201).send(result)
})


export default inscriptionRouter