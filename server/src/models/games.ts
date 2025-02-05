import { DataTypes, type Sequelize, Model, type Optional } from 'sequelize';

//Define the attributes of the Game model
interface GameAttributes {
    id: number;
    slug: string;
    name: string;
    released: Date;
    tba: boolean;
    background_image: string;
    rating: number;
    rating_top: number;
    metacritic: number;
    playtime: number;
    suggestions_count: number;
    updated: Date;
}

// Define which arttributes are optional when creating a new Game
interface GameCreationAttributes extends Optional<GameAttributes, 'id'> {}

//Create the Game model class
export class Game
extends Model<GameAttributes, GameCreationAttributes>
implements GameAttributes
{
    public id!: number;
    public slug!: string;
    public name!: string;
    public released!: Date;
    public tba!: boolean;
    public background_image!: string;
    public rating!: number;
    public rating_top!: number;
    public metacritic!: number;
    public playtime!: number;
    public suggestions_count!: number;
    public updated!: Date;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

export function GameFactory(sequelize: Sequelize): typeof Game {
    Game.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        slug: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        released: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        tba: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
        },
        background_image: {
          type: DataTypes.STRING,
        },
        rating: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        rating_top: {
          type: DataTypes.FLOAT,
        },
        metacritic: {
          type: DataTypes.INTEGER,
        },
        playtime: {
          type: DataTypes.INTEGER,
        },
        suggestions_count: {
          type: DataTypes.INTEGER,
        },
        updated: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW,
        },
      },
      {
        tableName: 'games',
        sequelize, // Passing the `sequelize` instance to the model
      }
    );
  
    return Game;
  }