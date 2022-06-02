"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPersonaRol = void 0;
const toPersonaRol = (personaRol) => {
    return {
        idPersonaRol: personaRol.idPersonaRol,
        idPersona: personaRol.idPersona,
        idRol: personaRol.idRol,
        createdAt: personaRol.createdAt,
        updatedAt: personaRol.updatedAt
    };
};
exports.toPersonaRol = toPersonaRol;
//# sourceMappingURL=mapper.js.map