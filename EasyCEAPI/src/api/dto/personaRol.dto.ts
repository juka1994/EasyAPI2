import { type } from "os";

export type CreatePersonaRolDto = {
    idPersona: number;
    idRol: number;
}

export type UpdatePersonaRolDto = Partial<CreatePersonaRolDto>