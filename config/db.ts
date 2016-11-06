/**
 * Created by Monyk on 05.11.2016.
 */
import * as Sequelize from 'sequelize'

const db : Sequelize.Sequelize = new Sequelize('postgres://monyk:root@localhost:5432/mcreactor')

export default db