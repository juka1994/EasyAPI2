import { Router, Request, Response } from "express";
import * as maestroController from '../controllers/maestro'
import { CreateMaestroDto, UpdateMaestroDto } from '../dto/maestro.dto';

const teacherRouter = Router()

teacherRouter.post('/',async (req: Request, res: Response) => {
      const payload: CreateMaestroDto = req.body;

      const result = await maestroController.create(payload);

      return res.status(200).send(result)
    
})

teacherRouter.get('/:id',async (req: Request, res: Response) => {
      const idMaestro = Number(req.params.id)
  
      const result = await maestroController.getById(idMaestro)
  
      return res.status(200).send(result)  
})

teacherRouter.get('/', async (req: Request, res: Response) => {
      const result = await maestroController.getAll()
  
      return res.status(200).send(result)
})

teacherRouter.put('/:id',async (req: Request, res: Response) => {
      const idMaestro = Number(req.params.id)
      const payload: CreateMaestroDto = req.body
     
      const result = await maestroController.update(idMaestro, payload)
  
      return res.status(201).send(result)
})
  
export default teacherRouter