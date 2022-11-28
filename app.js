const express = require('express')
require('dotenv').config()
const _ = require('lodash')
const logger = require('morgan')
const app = express()
const errorHandler = require('./src/middlewares/errorHandler')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('views', './views')
app.set('view engine', 'ejs')

const indexRouter = require('./src/routes/index')
app.use(indexRouter)
app.use(errorHandler)

module.exports = app
