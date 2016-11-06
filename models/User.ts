/**
 * Created by Monyk on 06.11.2016.
 */
import db from '../config/db'
import * as Sequelize from "sequelize";

export interface UserAttribute
{
    id?:string
    name?:string
}

export interface UserInstance extends Sequelize.Instance<UserAttribute>, UserAttribute
{}

export interface UserModel extends Sequelize.Model<UserInstance, UserAttribute>
{}

const User : UserModel = db.define<UserInstance, UserAttribute>("User", {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    tableName: 'users',
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at"
})

User.sync({force: true}).then(() => {
    return User.create(<UserAttribute> {
        name : 'LOL'
    })
})

export default User




