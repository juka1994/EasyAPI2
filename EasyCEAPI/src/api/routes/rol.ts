import { Router, Request, Response} from 'express'
import { CreateRolDto } from 'api/dto/rol.dto'
import * as rolController from '../controllers/rol'

const roleRouter = Router()

roleRouter.post('/',async (req: Request, res: Response) => {
    const payload: CreateRolDto = req.body

    const result = await rolController.create(payload)
    return res.status(200).send(result)
})

roleRouter.get('/',async (req: Request, res: Response) => {
    const result = await rolController.getAll()

    res.status(200).send(result)
})
export default roleRouter