const knexConfig = require('../config')
const Messages = require('./messages.knex')

const messageService = new Messages(knexConfig)

module.exports = messageService
