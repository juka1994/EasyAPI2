"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const models_1 = require("./models");
const isDev = process.env.NODE_ENV === 'development';
const dbInit = () => __awaiter(void 0, void 0, void 0, function* () {
    return Promise.all([
        yield models_1.Persona.sync({ alter: isDev }),
        yield models_1.Rol.sync({ alter: isDev }),
        yield models_1.Grado.sync({ alter: isDev }),
        yield models_1.Ciclo.sync({ alter: isDev }),
        yield models_1.Grupo.sync({ alter: isDev }),
        yield models_1.Materia.sync({ alter: isDev }),
        yield models_1.PersonaRol.sync({ alter: isDev }),
        yield models_1.Estudiante.sync({ alter: isDev }),
        yield models_1.Maestro.sync({ alter: isDev }),
        yield models_1.Inscripcion.sync({ alter: isDev }),
        yield models_1.Asignacion.sync({ alter: isDev }),
        yield models_1.DiasSemana.sync({ alter: isDev })
    ]).then((res) => {
        console.log(res);
    }).catch((error) => {
        console.log(error);
    });
});
exports.default = dbInit;
//# sourceMappingURL=init.js.map