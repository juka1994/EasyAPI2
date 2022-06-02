"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../config"));
const _1 = require(".");
class Asignacion extends sequelize_1.Model {
}
Asignacion.init({
    idAsignacion: {
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
    idMateria: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            key: 'idMateria',
            model: _1.Materia
        }
    },
    idMaestro: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            key: 'idMaestro',
            model: _1.Maestro
        }
    }
}, {
    sequelize: config_1.default,
    tableName: 'Asignacion'
});
exports.default = Asignacion;
//# sourceMappingURL=Asignacion.js.map