import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { bugsService } from '../services/BugsService'

export class BugsController extends BaseController {
  constructor() {
    super('api/bugs')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getOne)
      .get('/:id/notes', this.getAllBugNotes)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.destroy)
  }

  async getAll(req, res, next) {
    try {
      const bugs = await bugsService.getAll(req.query)
      res.send(bugs)
    } catch (error) {
      next(error)
    }
  }

  async getOne(req, res, next) {
    try {
      const bug = await bugsService.getOne(req.params.id)
      res.send(bug)
    } catch (error) {
      next(error)
    }
  }

  async getAllBugNotes(req, res, next) {
    try {
      const notes = await bugsService.getAllBugNotes(req.params.id)
      res.send(notes)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const bug = await bugsService.create(req.body)
      res.send(bug)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      delete req.body.closed
      const bug = await bugsService.edit(req.body)
      res.send(bug)
    } catch (error) {
      next(error)
    }
  }

  async destroy(req, res, next) {
    try {
      const bug = await bugsService.destroy(req.params.id)
      res.send(bug)
    } catch (error) {
      next(error)
    }
  }
}
