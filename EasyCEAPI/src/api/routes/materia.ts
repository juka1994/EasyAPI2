import { Request, Response, Router} from 'express'
import  * as materiaController from '../controllers/materia'
import { CreateMateriaDto, UpdateMateriaDto } from 'api/dto/materia.dto'

const subjectRouter = Router()

subjectRouter.post('/',async (req: Request, res: Response) => {
    const payload: CreateMateriaDto = req.body
   
    const result = await materiaController.create(payload)

    return res.status(200).send(result)
})

subjectRouter.get('/:id' ,async (req: Request, res: Response) => {
    const idMateria = Number(req.params.id)

    const result = await materiaController.getById(idMateria)
    res.status(200).send(result)
})

subjectRouter.get('/',async (req: Request, res: Response) => {
    const result = await materiaController.getAll()

    res.status(200).send(result)
})

subjectRouter.put('/:id',async (req: Request, res: Response) => {
    const idMateria = Number(req.params.id)
    const payload: CreateMateriaDto = req.body

    const result = await materiaController.update(idMateria, payload)
    return res.status(201).send(result)

})

export default subjectRouter