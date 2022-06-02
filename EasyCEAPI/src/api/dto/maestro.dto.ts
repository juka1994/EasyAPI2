export type CreateMaestroDto = {
    Codigo: string;
    Especialidad: string;
    idPersonaRol: number;
}

export type UpdateMaestroDto = Partial<CreateMaestroDto>