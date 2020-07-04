import Sequelize, { DataTypes } from 'sequelize'

import player from './player'
import team from './team'

export const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: 'postgres',
    define: {
      timestamps: false,
    },
  }
)

const models = {
  Player: player(sequelize, DataTypes),
  Team: team(sequelize, DataTypes),
}

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models)
  }
})

export default models
