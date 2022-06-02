import { Optional } from "sequelize/types";

export type CreateGradoDto = {
    Nombre: string;
}

export type UpdateGradoDto = Optional<CreateGradoDto, 'Nombre'>

export type FilterGradoDto ={
    isDeleted?: boolean
    includeDelete?: boolean
}