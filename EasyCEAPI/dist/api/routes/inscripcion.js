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
const inscriptionController = __importStar(require("../controllers/inscripcion"));
const express_1 = require("express");
const inscriptionRouter = (0, express_1.Router)();
inscriptionRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    const result = yield inscriptionController.create(payload);
    return res.status(200).send(result);
}));
inscriptionRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idInscripcion = Number(req.params.id);
    const result = yield inscriptionController.getById(idInscripcion);
    return res.status(200).send(result);
}));
inscriptionRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield inscriptionController.getAll();
    return res.status(200).send(result);
}));
inscriptionRouter.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idInscripcion = Number(req.params.id);
    const inscripcionUpdate = req.body;
    const result = yield inscriptionController.update(idInscripcion, inscripcionUpdate);
    return res.status(201).send(result);
}));
exports.default = inscriptionRouter;
//# sourceMappingURL=inscripcion.js.map