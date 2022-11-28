const app = require('./app'),
  PORT = process.env.SERVER_PORT || 3000

app.listen(PORT, () => console.info(`Server up and running in port ${PORT}`))
