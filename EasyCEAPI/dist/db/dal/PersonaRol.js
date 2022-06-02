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
exports.checkIsTeacher = exports.checkIsStudent = exports.update = exports.getAll = exports.getById = exports.create = void 0;
const models_1 = require("../models");
const lodash_1 = require("lodash");
const create = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const personRole = yield models_1.PersonaRol.create(payload);
    return personRole;
});
exports.create = create;
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const personRole = yield models_1.PersonaRol.findByPk(id);
    if (!personRole) {
        throw new Error('not found');
    }
    return personRole;
});
exports.getById = getById;
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const personRole = yield models_1.PersonaRol.findAll();
    return personRole;
});
exports.getAll = getAll;
const update = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const personRole = yield models_1.PersonaRol.findByPk(id);
    if (!personRole) {
        throw new Error('not found');
    }
    const personRoleUpdate = yield personRole.update(payload);
    return personRoleUpdate;
});
exports.update = update;
const checkIsStudent = (idPersonaRol) => __awaiter(void 0, void 0, void 0, function* () {
    const personRoleIsStudent = yield models_1.PersonaRol.findOne({
        where: { idPersonaRol: idPersonaRol,
            idRol: 1
        }
    });
    //Esta vacio no entonces es se niega y es true(es estudiante)
    //Esta vacio si entonces es se niega y es false (no es estudiante)
    return !(0, lodash_1.isEmpty)(personRoleIsStudent);
});
exports.checkIsStudent = checkIsStudent;
const checkIsTeacher = (idPersonaRol) => __awaiter(void 0, void 0, void 0, function* () {
    const personRoleIsTeacher = yield models_1.PersonaRol.findOne({
        where: {
            idPersonaRol: idPersonaRol,
            idRol: 2
        }
    });
    //Esta vacio no entonces se niega y es true(es maestro)
    //Esta vacio si entonces se niega y es false( no es maestro)
    return !(0, lodash_1.isEmpty)(personRoleIsTeacher);
});
exports.checkIsTeacher = checkIsTeacher;
//# sourceMappingURL=PersonaRol.js.map