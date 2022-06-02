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
    const assignment = yield models_1.Asignacion.create(payload);
    return assignment;
});
exports.create = create;
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const assignment = yield models_1.Asignacion.findByPk(id);
    if (!assignment) {
        throw new Error('not found');
    }
    return assignment;
});
exports.getById = getById;
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield models_1.Asignacion.findAll();
    return result;
});
exports.getAll = getAll;
const update = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const assignment = yield models_1.Asignacion.findByPk(id);
    if (!assignment) {
        throw new Error('not found');
    }
    const assignmentUpdate = assignment.update(payload);
    return assignmentUpdate;
});
exports.update = update;
//# sourceMappingURL=Asignacion.js.map