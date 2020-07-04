import { Router } from 'express'

import models from '../models'

const router = Router()

router.get('/', async (req, res) => {
  const teams = await models.Team.findAll(
    {
      include: [
        {
          model: models.Player,
          attributes: { exclude: ['teamId'] },
        },
      ],
    }
  )

  res.send(teams)
})

router.get('/:id', async (req, res) => {
  const team = await models.Team.findByPk(req.params.id,
    {
      include: [
        {
          model: models.Player,
          attributes: { exclude: ['teamId'] },
        },
      ],
    }
  )

  !team
    ? res.sendStatus(404)
    : res.send(team)
})

router.post('/', async (req, res, next) => {
  const team = await models.Team.create(
    {
      name: req.body.name,
      tag: req.body.tag,
    }
  ).catch(next)

  res.send(team)
})

router.put('/:id', async (req, res, next) => {
  const team = await models.Team.findByPk(req.params.id)

  !team
    ? res.sendStatus(404)
    : await team.update(
      {
        name: req.body.name,
        tag: req.body.tag,
      }
    ).catch(next)

  res.send('Team updated.')
})

router.delete('/:id', async (req, res) => {
  const team = await models.Team.findByPk(req.params.id)

  !team
    ? res.sendStatus(404)
    : await team.destroy()

  res.send(`Team ${team.name} deleted.`)
})

export default router
