import { Request, Response, Router } from "express";
import * as grupoController from '../controllers/grupo'
import { CreateGrupoDto, FilterGrupoDto, UpdateGrupoDto } from "api/dto/grupo.dto";

const groupRouter = Router()

groupRouter.post('/',async (req: Request, res: Response) => {
    const payload: CreateGrupoDto = req.body

    const result = await grupoController.create(payload)
    return res.status(200).send(result)
})

groupRouter.get('/:id',async (req: Request, res: Response) => {
    const idGrupo = Number(req.params.id)

    const result = await grupoController.getById(idGrupo)

    return res.status(200).send(result)
})

groupRouter.get('/',async (req: Request, res: Response) => {
     const filter: FilterGrupoDto = req.query
     
     const result = await grupoController.getAll(filter)
     return res.status(200).send(result)
})

groupRouter.put('/:id',async (req: Request, res: Response) => {
    const idGrupo = Number(req.params.id)
    const payload: CreateGrupoDto = req.body
    
    const result = await grupoController.update(idGrupo, payload)
    return res.status(201).send(result)
    
})

groupRouter.delete('/:id',async (req: Request, res: Response ) => {
    const idGrupo = Number(req.params.id)

    const result = await grupoController.deleteById(idGrupo)
    return res.status(201).send({
        success: result
    })
})

export default groupRouter