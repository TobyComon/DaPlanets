import { dbContext } from '../db/DbContext.js'

class StarsService {
  async getAll() {
    return await dbContext.Stars.find({}).populate('creator', 'picture name')
  }

  getById(id) {
    throw new Error('Method not implemented.')
  }

  create(body) {
    throw new Error('Method not implemented.')
  }
}

export const starsService = new StarsService()
