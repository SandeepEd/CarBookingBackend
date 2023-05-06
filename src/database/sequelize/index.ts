import { Sequelize, Options } from "sequelize"
import config from 'config';

const {
    dialect,
    username,
    password,
    database,
    host,
    port
}: Options = config.get('database');

console.log(`configurations :::`, dialect, username, password, database, host, port)

const sequelize = new Sequelize({
    dialect,
    host,
    port,
    database,
    username,
    password
})

sequelize.authenticate().then(s => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

export default sequelize