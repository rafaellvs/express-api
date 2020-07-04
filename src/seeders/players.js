import models from '../models'

const seedPlayers = async () => {
  await models.Player.bulkCreate([
    {
      name: 'arteezy',
      teamId: 1,
    },
    {
      name: 'ramzes',
      teamId: 1,
    },
    {
      name: 'abed',
      teamId: 1,
    },
    {
      name: 'cr1t',
      teamId: 1,
    },
    {
      name: 'fly',
      teamId: 1,
    },
    {
      name: 'svg',
      teamId: 2,
    },
    {
      name: 'mss',
      teamId: 2,
    },
    {
      name: 'lelis',
      teamId: 2,
    },
    {
      name: 'yawar',
      teamId: 2,
    },
    {
      name: 'quinn',
      teamId: 2,
    },
  ])
}

export default seedPlayers
