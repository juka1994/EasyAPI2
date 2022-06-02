"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toAsignacion = void 0;
const toAsignacion = (assignment) => {
    return {
        idAsignacion: assignment.idAsignacion,
        Fecha: assignment.Fecha,
        idCiclo: assignment.idCiclo,
        idMateria: assignment.idMateria,
        idMaestro: assignment.idMaestro,
        createdAt: assignment.createdAt,
        updatedAt: assignment.updatedAt
    };
};
exports.toAsignacion = toAsignacion;
//# sourceMappingURL=mapper.js.map