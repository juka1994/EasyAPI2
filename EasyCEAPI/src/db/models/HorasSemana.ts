import { Model, DataTypes, Optional } from 'sequelize'
import sequelizeConnection from '../config'

interface HorasSemana{
    idHorasSemana: number
    RangoHorario: string
    idDiasSemana: number
}

