import { Router, Request, Response} from 'express'
import * as asignacionController from '../controllers/asignacion'
import { CreateAsignacionDto, UpdateAsignacionDto } from 'api/dto/asignacion.dto'

const assignmentRouter = Router()

assignmentRouter.post('/',async (req: Request, res: Response) => {
    const assignment: CreateAsignacionDto = req.body
    
    const result = await asignacionController.create(assignment)
    return res.status(200).send(result)
})

assignmentRouter.get('/:id',async (req: Request, res: Response) => {
    const idAsignacion = Number(req.params.id)
    const result = await asignacionController.getById(idAsignacion)
    return res.status(200).send(result)
})

assignmentRouter.get('/',async (req: Request, res: Response) => {
    const result = await asignacionController.getAll()
    res.status(200).send(result)
})

assignmentRouter.put('/:id',async (req: Request, res: Response) => {
    const idAsignacion = Number(req.params.id)
    const assignment: CreateAsignacionDto = req.body

    const result = await asignacionController.update(idAsignacion, assignment)
    return res.status(201).send(result)
})

export default assignmentRouter