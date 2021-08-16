import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'
class BugsService {
  async create(body) {
    const bug = await dbContext.Bugs.create(body)
    return await dbContext.Bugs.findById(bug._id).populate('creator', 'name picture')
  }

  async getAll(query = {}) {
    const bugs = await dbContext.Bugs.find(query).populate('creator', 'name picture')
    return bugs
  }

  async getOne(id) {
    const bug = await dbContext.Bugs.findById(id).populate('creator', 'name picture')
    if (!bug) {
      throw new BadRequest('Invalid Id')
    }
    return bug
  }

  async getAllBugNotes(id) {
    const notes = await dbContext.Notes.find({ bugId: id }).populate('creator', 'name picture')
    return notes
  }

  async edit(body) {
    const bug = await dbContext.Bugs.findByIdAndUpdate(body.id, body, { new: true, runValidators: true })
    if (!bug) {
      throw new BadRequest('Invalid Id')
    }
    if (bug.closed) {
      throw new BadRequest('Cannot Edit if Closed')
    }
    return bug
  }

  async destroy(id) {
    const bug = await dbContext.Bugs.findById(id)

    if (!bug) {
      throw new BadRequest('Invalid Id')
    }
    bug.closed = true
    const updatedBug = await dbContext.Bugs.findByIdAndUpdate(id, bug, { new: true, runValidators: true })
    return updatedBug
  }
}

export const bugsService = new BugsService()
