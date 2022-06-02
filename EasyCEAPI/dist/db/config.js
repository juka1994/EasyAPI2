"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const sequelize_1 = require("sequelize");
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbDriver = process.env.DB_DRIVER;
const dbPassword = process.env.DB_PASSWORD;
const sequelizeConnection = new sequelize_1.Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: dbDriver,
    timezone: '-06:00'
});
exports.default = sequelizeConnection;
//# sourceMappingURL=config.js.map