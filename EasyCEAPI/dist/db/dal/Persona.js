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
exports.deleteById = exports.update = exports.getAll = exports.getById = exports.create = void 0;
const sequelize_1 = require("sequelize");
const models_1 = require("../models");
const create = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const person = yield models_1.Persona.create(payload);
    return person;
});
exports.create = create;
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const person = yield models_1.Persona.findByPk(id);
    if (!person) {
        throw new Error('not found');
    }
    return person;
});
exports.getById = getById;
const getAll = (filters) => __awaiter(void 0, void 0, void 0, function* () {
    return yield models_1.Persona.findAll(Object.assign({ where: Object.assign({}, ((filters === null || filters === void 0 ? void 0 : filters.isDeleted) && { deletedAt: { [sequelize_1.Op.not]: null } })) }, (((filters === null || filters === void 0 ? void 0 : filters.isDeleted) || (filters === null || filters === void 0 ? void 0 : filters.includeDeleted)) && { paranoid: true })));
});
exports.getAll = getAll;
const update = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const person = yield models_1.Persona.findByPk(id);
    if (!person) {
        throw new Error('not found');
    }
    const personUpdate = yield person.update(payload);
    return personUpdate;
});
exports.update = update;
const deleteById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const personDelete = yield models_1.Persona.destroy({
        where: { idPersona: id }
    });
    return !!personDelete;
});
exports.deleteById = deleteById;
//# sourceMappingURL=Persona.js.map