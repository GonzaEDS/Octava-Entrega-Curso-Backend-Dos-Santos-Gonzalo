module.exports = {
  client: 'mysql',
  connection: {
    host: process.env.SQL_HOST || 'localhost',
    user: process.env.SQL_USER || 'root',
    password: process.env.SQL_PASSWORD || '',
    database: process.env.SQL_DATABASE || 'ecommerce'
  }
}

// const path = require('path')

// module.exports = {
//   client: 'sqlite3',
//   connection: {
//     filename: path.resolve(__dirname, './db.sqlite')
//   },
//   useNullAsDefault: true
// }
