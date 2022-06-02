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
const models_1 = require("../models");
const sequelize_1 = require("sequelize");
const create = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const grade = yield models_1.Grado.create(payload);
    return grade;
});
exports.create = create;
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const grade = yield models_1.Grado.findByPk(id);
    if (!grade) {
        throw new Error('not fonund');
    }
    return grade;
});
exports.getById = getById;
const getAll = (filters) => __awaiter(void 0, void 0, void 0, function* () {
    return yield models_1.Grado.findAll(Object.assign({ where: Object.assign({}, ((filters === null || filters === void 0 ? void 0 : filters.isDeleted) && { deleteAt: { [sequelize_1.Op.not]: null } })) }, (((filters === null || filters === void 0 ? void 0 : filters.isDeleted) || (filters === null || filters === void 0 ? void 0 : filters.includeDeleted)) && { paranoid: true })));
});
exports.getAll = getAll;
const update = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const grade = yield models_1.Grado.findByPk(id);
    if (!grade) {
        throw new Error('not found');
    }
    const gradeUpdate = yield grade.update(payload);
    return gradeUpdate;
});
exports.update = update;
const deleteById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteGrade = yield models_1.Grado.destroy({
        where: { idGrado: id }
    });
    return !!deleteGrade;
});
exports.deleteById = deleteById;
//# sourceMappingURL=Grado.js.map