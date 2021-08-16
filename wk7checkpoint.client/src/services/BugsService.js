import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class BugsService {
  async getAllBugs() {
    const res = await api.get('/api/bugs')
    AppState.bugs = res.data
    logger.log(AppState.bugs)
  }

  async createBug(newBug) {
    const res = await api.post('/api/bugs', newBug)
    AppState.bugs.push(res.data)
    return res.data.id
  }
}

export const bugsService = new BugsService()
