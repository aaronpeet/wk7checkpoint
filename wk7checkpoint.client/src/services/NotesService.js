import { AppState } from '../AppState'
import { api } from './AxiosService'

class NotesService {
  async createNote(newNote) {
    const res = await api.post('/api/notes', newNote)
    AppState.notes = res.data.id
    await this.getAllActiveNotes(newNote.bugId)
  }

  async getAllActiveNotes(id) {
    const res = await api.get('/api/bugs/' + id + '/notes')
    AppState.activeNotes = res.data
  }

  async deleteNote(id) {
    await api.delete('/api/notes/' + id)
    AppState.activeNotes = AppState.activeNotes.filter(n => n.id !== id)
    await this.getAllActiveNotes()
  }
}

export const notesService = new NotesService()
