const express = require('express')
const router = express.Router()
const _ = require('lodash')
const roleMiddleware = require('../../../src/middlewares/roleMiddleware')
// const products = require('./products')
// router.use('/products', products)
const productService = require('../../../database/products/productService')
const messageService = require('../../../database/messages/messageService')

router.post('/', roleMiddleware, async (req, res, next) => {
  const { body } = req
  if (_.isNil(body)) {
    return res.status(400).json({
      success: false,
      message: 'Bad request'
    })
  }
  try {
    // const newProduct = await products.save(body)
    // res.status(200).json(newProduct)
    const data = await productService.createProduct(body)
    if (!data.success) {
      return res.status(400).json(data)
    }
    // res.status(200).json(data)
    res.redirect('/products')
  } catch (error) {
    next(error)
  }
})

router.get('/', async (_req, res) => {
  try {
    const productsResponse = await productService.getAll()
    let productsData = productsResponse.data

    const messagesResponse = await messageService.getAll()

    let messagesData = messagesResponse.data
    if (productsResponse.success) {
      res.render('pages/index', {
        productsData,
        messagesData
      })
    } else {
      res.status(404).json({
        response: 'can not find'
      })
    }
  } catch (error) {
    console.log(error)
    res.status(400).json({
      response: 'error'
    })
  }
})

module.exports = router
