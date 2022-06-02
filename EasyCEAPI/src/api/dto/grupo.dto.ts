export type CreateGrupoDto = {
    Nombre: string;
}

export type UpdateGrupoDto = Partial<CreateGrupoDto>

export type FilterGrupoDto ={
    isDeleted?: boolean
    includeDelete?: boolean
}