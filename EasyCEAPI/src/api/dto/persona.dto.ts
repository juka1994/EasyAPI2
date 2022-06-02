import { Optional } from 'sequelize/types'

export type CreatePersonaDto = {
    ApellidoPaterno: string;
    ApellidoMaterno: string;
    PrimerNombre: string;
    SegundoNombre: string;
    FechaNacimiento: Date;
    Email: string;
    Telefono: string;
    Direccion: string;
    Curp: string;
}

export type UpdatePersonaDto = Partial<CreatePersonaDto>

export type FilterPersonasDto = {
    isDeleted?: boolean
    includeDeleted?: boolean
}