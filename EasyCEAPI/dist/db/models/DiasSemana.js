"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../config"));
class DiasSemana extends sequelize_1.Model {
}
DiasSemana.init({
    idDiasSemana: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Nombre: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    sequelize: config_1.default,
    timestamps: false,
    tableName: 'DiasSemana'
});
exports.default = DiasSemana;
//# sourceMappingURL=DiasSemana.js.map