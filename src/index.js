import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import { sequelize } from './models'

import routes from './routes'

import { seedAll } from './seeders'

const app = express()

// middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routes
app.use('/players', routes.players)
app.use('/teams', routes.teams)

// error handler
app.use((err, req, res, next) => {
  console.log(err)
  res.send(err.message)
})

// start
sequelize.sync({ force: true }).then(async () => {
  await seedAll()

  app.listen(process.env.PORT, () =>
    console.log(`\nApp listening on port ${process.env.PORT}...`)
  )
})
