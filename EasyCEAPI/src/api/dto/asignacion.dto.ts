export type CreateAsignacionDto = {
    Fecha: Date
    idCiclo: number
    idMateria: number
    idMaestro: number
}

export type UpdateAsignacionDto = Partial<CreateAsignacionDto>