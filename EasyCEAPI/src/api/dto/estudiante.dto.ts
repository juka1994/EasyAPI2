export type CreateEstudianteDto = {
    Codigo: string;
    idPersonaRol: number;
}

export type UpdateEstudianteDto = Partial<CreateEstudianteDto>