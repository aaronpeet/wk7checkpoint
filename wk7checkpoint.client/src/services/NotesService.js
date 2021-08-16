import { AppState } from '../AppState'
import { api } from './AxiosService'

class NotesService {
  async createNote(newNote) {
    const res = await api.post('api/notes', newNote)
    AppState.notes = res.data
    return res.data.id
  }
}

export const notesService = new NotesService()
