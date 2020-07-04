const player = (sequelize, DataTypes) => {
  const Player = sequelize.define('player', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Name is required.' },
      },
    },
  })

  Player.associate = models =>
    Player.belongsTo(models.Team)

  return Player
}

export default player
