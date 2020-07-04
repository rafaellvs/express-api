import { Router } from 'express'

import models from '../models'

const router = Router()

router.get('/', async (req, res) => {
  const players = await models.Player.findAll(
    {
      include: [{ model: models.Team }],
      attributes: {
        exclude: ['teamId'],
      },
    }
  )

  res.send(players)
})

router.get('/:id', async (req, res) => {
  const player = await models.Player.findByPk(req.params.id,
    {
      include: [{ model: models.Team }],
      attributes: {
        exclude: ['teamId'],
      },
    }
  )

  !player
    ? res.sendStatus(404)
    : res.send(player)
})

router.post('/', async (req, res, next) => {
  const player = await models.Player.create(
    {
      name: req.body.name,
      teamId: req.body.teamId,
    }
  ).catch(next)

  res.send(player)
})

router.put('/:id', async (req, res, next) => {
  const player = await models.Player.findByPk(req.params.id)

  !player
    ? res.sendStatus(404)
    : await player.update(
      {
        name: req.body.name,
        teamId: req.body.teamId,
      }
    ).catch(next)

  res.send('Player updated.')
})

router.delete('/:id', async (req, res) => {
  const player = await models.Player.findByPk(req.params.id)

  !player
    ? res.sendStatus(404)
    : await player.destroy()

  res.send(`Player ${player.name} deleted.`)
})

export default router
