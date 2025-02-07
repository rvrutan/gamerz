import sequelize from '../config/connection.js';
import { UserFactory } from './user.js';
import { GameFactory } from './games.js';

const User = UserFactory(sequelize);
const Game = GameFactory(sequelize);

export { User, Game };
