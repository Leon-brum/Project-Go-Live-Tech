import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class User extends Model<InferAttributes<User>,
InferCreationAttributes<User>>{
  declare id: CreationOptional<number>;

  declare user: string;

  declare password: string;
}

User.init({
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER.UNSIGNED
  },
  user: {
    allowNull: false,
    type: DataTypes.STRING
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  }
}, {
  sequelize: db,
  underscored: true,
  modelName: 'users',
  timestamps: false,
})

export default User;