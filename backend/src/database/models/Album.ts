import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class Album extends Model<InferAttributes<Album>,
InferCreationAttributes<Album>>{
  declare id: CreationOptional<number>;

  declare name: string;

  declare artist: string;

  declare releaseDate: Date;

}

Album.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  artist: {
    allowNull: false,
    type: DataTypes.STRING
  },
  releaseDate: {
    allowNull: false,
    type: DataTypes.DATEONLY
  }

}, {
  sequelize: db,
  underscored: true,
  modelName: 'albums',
  timestamps: false,
});

export default Album;