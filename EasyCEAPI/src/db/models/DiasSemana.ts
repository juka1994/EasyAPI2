import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../config'

interface DiasSemanaAttributes{
    idDiasSemana: number
    Nombre: string
}

export interface DiasSemanaInput extends Optional<DiasSemanaAttributes, 'idDiasSemana'>{}

export interface idDiasSemanaOutput extends Required<DiasSemanaAttributes>{}

class DiasSemana extends Model<DiasSemanaAttributes, DiasSemanaInput> implements DiasSemanaAttributes{
    idDiasSemana!: number
    Nombre!: string
}

DiasSemana.init({
    idDiasSemana:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Nombre:{
        type: DataTypes.STRING
    }
},{
    sequelize: sequelizeConnection,
    timestamps: false,
    tableName: 'DiasSemana'
})

export default DiasSemana
