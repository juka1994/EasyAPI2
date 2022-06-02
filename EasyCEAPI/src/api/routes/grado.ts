import { Router, Request, Response } from "express"
import * as gradoController from '../controllers/grado'
import { CreateGradoDto, FilterGradoDto, UpdateGradoDto } from "api/dto/grado.dto"

const gradeRouter = Router()

gradeRouter.post('/',async (req: Request, res: Response) => {
    const payload: CreateGradoDto = req.body

    const result = await gradoController.create(payload)
    return res.status(200).send(result)
})

gradeRouter.get('/:id',async (req: Request, res: Response) => {
    const idGrado = Number(req.params.id)

    const result = await gradoController.getById(idGrado)
    return res.status(200).send(result)
})

gradeRouter.get('/',async (req:Request, res: Response) => {
    const filter: FilterGradoDto = req.query

    const result = await gradoController.getAll(filter)

    return res.status(200).send(result)
})

gradeRouter.put('/:id',async (req:Request, res: Response) => {
    const idGrado =  Number(req.params.id)
    const payload: CreateGradoDto = req.body
    
    const result = await gradoController.update(idGrado, payload)
    return res.status(201).send(result)
})

gradeRouter.delete('/:id',async (req: Request, res: Response) => {
    const idGrado = Number(req.params.id)

    const result = await gradoController.deleteById(idGrado)
    return res.status(201).send({
        success: result
    })

})
export default gradeRouter