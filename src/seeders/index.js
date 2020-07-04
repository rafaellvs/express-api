import seedPlayers from './players'
import seedTeams from './teams'

export const seedAll = async () => {
  await seedTeams()
  await seedPlayers()
}

const seeders = {
  seedPlayers,
  seedTeams,
}

export default seeders
