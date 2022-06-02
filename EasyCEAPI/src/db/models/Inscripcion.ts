import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../config'
import { Ciclo, Estudiante, Grado } from '.'

interface InscripcionAttributes{
    idInscripcion: number;
    Fecha: Date;
    idCiclo: number;
    idEstudiante: number;
    idGrado: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface InscripcionInput extends Optional<InscripcionAttributes, 'idInscripcion'>{}

export interface InscripcionOutput extends Required<InscripcionAttributes>{}

class Inscripcion extends Model<InscripcionAttributes, InscripcionInput> implements InscripcionAttributes{
    public idInscripcion!: number
    public Fecha!: Date
    public idCiclo!: number
    public idEstudiante!: number
    public idGrado!: number

    //timestamps
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Inscripcion.init({
    idInscripcion:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Fecha:{
        type: DataTypes.DATE
    },
    idCiclo:{
        type: DataTypes.INTEGER,
        references:{
            key: 'idCiclo',
            model: Ciclo
        }
    },
    idEstudiante:{
        type: DataTypes.INTEGER,
        references:{
            key: 'idEstudiante',
            model: Estudiante
        }
    },
    idGrado:{
        type: DataTypes.INTEGER,
        references:{
            key: 'idGrado',
            model: Grado
        }
    }
},{
    sequelize: sequelizeConnection,
    tableName: 'Inscripcion'
})

export default Inscripcion