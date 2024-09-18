import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';
import Album from './Album';

class Music extends Model<InferAttributes<Music>,
InferCreationAttributes<Music>>{
  declare id: CreationOptional<number>;

  declare name: string;

  declare artist: string;

  declare releaseDate: Date;

  declare albumId: number | null;

  declare deletedAt: Date | null;
}

Music.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
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
    type: DataTypes.DATEONLY,
    field: 'release_date'
  },
  albumId:{
    allowNull:true,
    type: DataTypes.INTEGER,
    field: 'album_id'
  },
  deletedAt: {
    type: DataTypes.DATE,
    field: 'deleted_at'
  },
}, {
  sequelize: db,
  underscored: true,
  modelName: 'musics',
  timestamps: true,
  paranoid: true
});

Music.belongsTo(Album, { foreignKey: 'albumId', as: 'album' });

Album.hasMany(Music, { foreignKey: 'albumId', as: 'album' });

export default Music;