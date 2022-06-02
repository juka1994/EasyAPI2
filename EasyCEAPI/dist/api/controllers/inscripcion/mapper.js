"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toInscripcion = void 0;
const toInscripcion = (inscripcion) => {
    return {
        idInscripcion: inscripcion.idInscripcion,
        Fecha: inscripcion.Fecha,
        idCiclo: inscripcion.idCiclo,
        idEstudiante: inscripcion.idEstudiante,
        idGrado: inscripcion.idGrado,
        createdAt: inscripcion.createdAt,
        updatedAt: inscripcion.updatedAt
    };
};
exports.toInscripcion = toInscripcion;
//# sourceMappingURL=mapper.js.map