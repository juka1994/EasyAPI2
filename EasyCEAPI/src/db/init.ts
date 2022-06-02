require('dotenv').config()
import { Persona, Rol, Grado, Ciclo, Grupo, Materia, PersonaRol, Estudiante, Maestro, Inscripcion, Asignacion, DiasSemana } from './models'


const isDev = process.env.NODE_ENV === 'development'


const dbInit = async () => Promise.all([
    await Persona.sync({alter: isDev}),
    await Rol.sync({alter: isDev }),
    await Grado.sync({alter: isDev }),
    await Ciclo.sync({alter: isDev}),
    await Grupo.sync({alter: isDev}),
    await Materia.sync({alter: isDev}),
    await PersonaRol.sync({alter: isDev}),
    await Estudiante.sync({ alter: isDev}),
    await Maestro.sync({alter: isDev}),
    await Inscripcion.sync({alter: isDev}),
    await Asignacion.sync({alter: isDev}),
    await DiasSemana.sync({alter: isDev})
]).then((res)=>{
    console.log(res)
}).catch((error)=>{
    console.log(error)
})

export default dbInit