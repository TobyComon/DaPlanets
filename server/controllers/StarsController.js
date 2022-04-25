import { Auth0Provider } from '@bcwdev/auth0provider'
import { starsService } from '../services/StarsService.js'
import BaseController from '../utils/BaseController.js'

export class StarsController extends BaseController {
  constructor() {
    super('api/stars')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .get('/:id/planets', this.getPlanetsByStar)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.remove)
  }

  async getAll(req, res, next) {
    try {
      const stars = await starsService.getAll()
      return res.send(stars)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      const star = await starsService.getById(req.params.id)
      return res.send(star)
    } catch (error) {
      next(error)
    }
  }

  async getPlanetsByStar(req, res, next) {
    try {
      const starPlanets = await planetsService.getPlanetsByStar(req.params.id)
      return res.send(starPlanets)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const star = await starsService.create(req.body)
      return res.send(star)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {

  }
}
