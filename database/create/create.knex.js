const knexConfig = require('../config')
const knex = require('knex')(knexConfig)

knex.schema.hasTable('products').then(has => {
  if (!has) {
    knex.schema
      .createTable('products', table => {
        table.increments('id'),
          table.string('name'),
          table.string('code'),
          table.string('description'),
          table.string('thumbnail'),
          table.float('price'),
          table.integer('stock')
      })
      .then(() => {
        console.info('Table Created')
      })
      .catch(err => {
        console.error(err)
      })
      .finally(() => {
        knex.destroy()
      })
  }
})
knex.schema.hasTable('messages').then(has => {
  if (!has) {
    knex.schema
      .createTable('messages', table => {
        table.increments('id'), table.string('email'), table.string('content')
      })
      .then(() => {
        console.info('Table Created')
      })
      .catch(err => {
        console.error(err)
      })
      .finally(() => {
        knex.destroy()
      })
  }
})
