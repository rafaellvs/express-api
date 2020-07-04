const team = (sequelize, DataTypes) => {
  const Team = sequelize.define('team', {
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
    tag: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Tag is required.' },
      },
    },
  })

  Team.associate = models =>
    Team.hasMany(models.Player)

  return Team
}

export default team
