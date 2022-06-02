import { Router } from "express";
import personRouter from "./persona";
import roleRouter from "./rol";
import cicloRouter from "./ciclo";
import gradeRouter from "./grado";
import groupRouter from "./grupo";
import subjectRouter from "./materia";
import personRoleRouter from "./personaRol";
import studentRouter from "./estudiante";
import teacherRouter from "./maestro";
import inscriptionRouter from "./inscripcion";
import assignmentRouter from "./asignacion";

const router = Router();

router.use('/persona', personRouter)
router.use('/rol', roleRouter)
router.use('/ciclo', cicloRouter)
router.use('/grado', gradeRouter)
router.use('/grupo', groupRouter)
router.use('/materia', subjectRouter)
router.use('/personaRol', personRoleRouter)
router.use('/estudiante', studentRouter)
router.use('/maestro', teacherRouter)
router.use('/inscripcion', inscriptionRouter)
router.use('/asignacion', assignmentRouter)

export default router