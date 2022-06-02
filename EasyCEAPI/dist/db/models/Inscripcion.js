"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../config"));
const _1 = require(".");
class Inscripcion extends sequelize_1.Model {
}
Inscripcion.init({
    idInscripcion: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Fecha: {
        type: sequelize_1.DataTypes.DATE
    },
    idCiclo: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            key: 'idCiclo',
            model: _1.Ciclo
        }
    },
    idEstudiante: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            key: 'idEstudiante',
            model: _1.Estudiante
        }
    },
    idGrado: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            key: 'idGrado',
            model: _1.Grado
        }
    }
}, {
    sequelize: config_1.default,
    tableName: 'Inscripcion'
});
exports.default = Inscripcion;
//# sourceMappingURL=Inscripcion.js.map