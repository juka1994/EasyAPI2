import { DataTypes, Optional, Model } from "sequelize";
import  { Persona, Rol }  from '.'
import sequelizeConnection from "../config";


interface PersonaRolAttributes{
    idPersonaRol: number
    idPersona: number
    idRol: number
    createdAt?: Date;
    updatedAt?: Date;
}

export interface PersonaRolInput extends Optional<PersonaRolAttributes, 'idPersonaRol'>{}

export interface PersonaRolOutput extends Required<PersonaRolAttributes>{}

class PersonaRol extends Model<PersonaRolAttributes, PersonaRolInput> implements PersonaRolAttributes{
    public idPersonaRol!: number;
    public idPersona!: number;
    public idRol!: number;

    //timestamps
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

PersonaRol.init({
    idPersonaRol:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    idPersona:{
        type: DataTypes.INTEGER,
        references:{
            key: 'idPersona',
            model: Persona
        }  
    },
    idRol:{
        type: DataTypes.INTEGER,
        references:{
            key:'idRol',
            model: Rol,
        }
    }
},{
    sequelize: sequelizeConnection,
    tableName: 'PersonaRol'
})


export default PersonaRol