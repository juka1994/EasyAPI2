import {Router, Request, Response} from 'express'
import * as estudianteController from '../controllers/estudiante'
import { CreateEstudianteDto, UpdateEstudianteDto } from 'api/dto/estudiante.dto'

const studentRouter = Router()

studentRouter.post('/',async (req: Request, res: Response) => {
    const payload: CreateEstudianteDto = req.body

    const result = await estudianteController.create(payload)
    return res.status(200).send(result)
})

studentRouter.get('/:id',async (req: Request, res: Response) => {
    const idEstudiante = Number(req.params.id)

    const result = await estudianteController.getById(idEstudiante)

    return res.status(200).send(result)
})

studentRouter.get('/', async (req: Request, res: Response) => {
    const result = await estudianteController.getAll()

    return res.status(200).send(result)
})

studentRouter.put('/:id',async (req: Request, res: Response) => {
    const idEstudiante = Number(req.params.id)
    const payload: CreateEstudianteDto = req.body
   
    const result = await estudianteController.update(idEstudiante, payload)

    return res.status(201).send(result)
})

export default studentRouter