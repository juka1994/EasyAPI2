export type CreateMateriaDto = {
    Nombre: string;
    Descripcion: string;
    Creditos: number;
    Horas: number;
    Estado: boolean;
    idGrado: number;
}

export type UpdateMateriaDto = Partial<CreateMateriaDto>