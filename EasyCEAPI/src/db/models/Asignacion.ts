import { DataTypes, Optional, Model } from 'sequelize'
import sequelizeConnection from '../config'
import { Ciclo, Materia, Maestro } from '.'

interface AsignacionAttributes{
    idAsignacion: number
    Fecha: Date
    idCiclo: number
    idMateria: number
    idMaestro: number
    createdAt?: Date;
    updatedAt?: Date;
}

export interface AsignacionInput extends Optional<AsignacionAttributes,'idAsignacion'>{}

export interface AsignacionOutput extends Required<AsignacionAttributes>{}

class Asignacion extends Model<AsignacionAttributes, AsignacionInput> implements AsignacionAttributes{
    public idAsignacion!: number
    public Fecha!: Date
    public idCiclo!: number
    public idMateria!: number
    public idMaestro!: number
    
    //timestamps
    public readonly createdAt!: Date
    public readonly updatedAt!: Date 
}

Asignacion.init({
    idAsignacion:{
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
    idMateria:{
        type: DataTypes.INTEGER,
        references:{
            key: 'idMateria',
            model: Materia
        }
    },
    idMaestro:{
        type: DataTypes.INTEGER,
        references:{
            key: 'idMaestro',
            model: Maestro
        }
    }
},{
    sequelize: sequelizeConnection,
    tableName: 'Asignacion'
})

export default Asignacion
