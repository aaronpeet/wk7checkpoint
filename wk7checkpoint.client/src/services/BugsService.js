import { AppState } from '../AppState'
import { api } from './AxiosService'

class BugsService {
  async getAllBugs() {
    const res = await api.get('')
    AppState.bugs = res.data
  }
}

export const bugsService = new BugsService()
