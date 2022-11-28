const express = require('express')

const router = express.Router()
const productsRouter = require('./products/products.router')
// const cartRouter = require('./cart/cart.router')
const apiRouter = require('./api/api.router')
const messageRouter = require('./messages/messages.router')

router
  .get('/health', (_req, res) => {
    res.status(200).json({
      success: true,
      healt: 'up',
      enviroment: process.env.ENVIROMENT || 'not found'
    })
  })
  .use('/products', productsRouter)
  //   .use('/cart', cartRouter)
  .use('/api', apiRouter)
  .use('/messages', messageRouter)
module.exports = router
