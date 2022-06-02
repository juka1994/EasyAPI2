"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAll = exports.deleteById = exports.getById = exports.update = exports.create = void 0;
const groupDal = __importStar(require("../dal/Grupo"));
const create = (payload) => {
    return groupDal.create(payload);
};
exports.create = create;
const update = (id, payload) => {
    return groupDal.update(id, payload);
};
exports.update = update;
const getById = (id) => {
    return groupDal.getById(id);
};
exports.getById = getById;
const deleteById = (id) => {
    return groupDal.deleteById(id);
};
exports.deleteById = deleteById;
const findAll = (filters) => {
    return groupDal.getAll(filters);
};
exports.findAll = findAll;
//# sourceMappingURL=GrupoService.js.map