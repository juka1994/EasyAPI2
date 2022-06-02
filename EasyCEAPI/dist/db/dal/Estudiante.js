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
exports.update = exports.getAll = exports.getById = exports.create = void 0;
const models_1 = require("../models");
const create = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const student = yield models_1.Estudiante.create(payload);
    return student;
});
exports.create = create;
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const student = yield models_1.Estudiante.findByPk(id);
    if (!student) {
        throw new Error('not found');
    }
    return student;
});
exports.getById = getById;
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const student = yield models_1.Estudiante.findAll();
    return student;
});
exports.getAll = getAll;
const update = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const student = yield models_1.Estudiante.findByPk(id);
    if (!student) {
        throw new Error('not found');
    }
    const studentUpdate = yield student.update(payload);
    return studentUpdate;
});
exports.update = update;
//# sourceMappingURL=Estudiante.js.map