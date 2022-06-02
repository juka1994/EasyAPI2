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
    const teacher = yield models_1.Maestro.create(payload);
    return teacher;
});
exports.create = create;
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const teacher = yield models_1.Maestro.findByPk(id);
    if (!teacher) {
        throw new Error('not found');
    }
    return teacher;
});
exports.getById = getById;
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const teacher = yield models_1.Maestro.findAll();
    return teacher;
});
exports.getAll = getAll;
const update = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const teacher = yield models_1.Maestro.findByPk(id);
    if (!teacher) {
        throw new Error('not found');
    }
    const teacherUpdate = yield teacher.update(payload);
    return teacherUpdate;
});
exports.update = update;
//# sourceMappingURL=Maestro.js.map