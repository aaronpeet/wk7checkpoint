import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class NotesService {
  async create(body) {
    const note = await dbContext.Notes.create(body)
    return await dbContext.Notes.findById(note.id).populate('creator', 'name email')
  }

  async destroy(id) {
    const note = await dbContext.Notes.findByIdAndDelete(id)
    if (!note) {
      throw new BadRequest('Invalid Id')
    }
    return note
  }
}

export const notesService = new NotesService()
