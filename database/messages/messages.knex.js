const knex = require('knex')

class Messages {
  constructor(knexConfig) {
    this.knex = knex(knexConfig)
  }
  async save(message) {
    try {
      await this.knex('messages').insert(message)
      return {
        success: true,
        message: 'Message stored'
      }
    } catch (error) {
      console.error(error)
      return {
        success: false,
        message: error.message
      }
    }
  }

  async getAll() {
    try {
      const messages = await this.knex('messages').select('*')

      const msjResponseArray = messages.map(prod => {
        return JSON.parse(JSON.stringify(prod))
      })
      return {
        success: true,
        data: msjResponseArray
      }
    } catch (error) {
      console.error(error)
      return {
        success: false,
        message: err.message
      }
    }
  }
}
module.exports = Messages
