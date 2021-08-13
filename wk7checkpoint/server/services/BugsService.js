import { dbContext } from '../db/DbContext'
class BugsService {
  async create(body) {
    const bug = await dbContext.Bugs.create(body)
    return await dbContext.Bugs.findById(bug._id).populate('creator', 'name picture')
  }

  async getAll(query = {}) {
    const bugs = await dbContext.Bugs.findById(query).populate('creator', 'name picture')
    return bugs
  }
}

export const bugsService = new BugsService()
