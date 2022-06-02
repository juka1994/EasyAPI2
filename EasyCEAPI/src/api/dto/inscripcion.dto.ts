export type CreateInscripcionDto = {
    Fecha: Date
    idCiclo: number
    idEstudiante: number
    idGrado: number
}

export type UpdateInscripcionDto = Partial<CreateInscripcionDto>