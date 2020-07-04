import models from '../models'

const seedTeams = async () => {
  await models.Team.bulkCreate([
    {
      name: 'Evil Geniuses',
      tag: 'EG',
    },
    {
      name: 'Quincy Crew',
      tag: 'QCY',
    },
  ])
}

export default seedTeams
