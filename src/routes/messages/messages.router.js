const express = require('express')
const roleMiddleware = require('../../../src/middlewares/roleMiddleware')
const router = express.Router()
const _ = require('lodash')

// const products = require('./../../../storage/products')
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
    const data = await messageService.save(body)
    if (!data.success) {
      return res.status(400).json(data)
    }
    // res.status(200).json(data)
    res.redirect('/products')
  } catch (error) {
    next(error)
  }
})

router.get('/', async (_req, res, next) => {
  try {
    // let data = await products.getAll()
    let data = await messageService.getAll()
    console.log(data)
    if (data) {
      //   res.render('pages/index', { data, page: 'table', title: 'Products view' })
      res.status(200).send(data)
    } else {
      res.status(404).json({
        response: 'can not find'
      })
    }
  } catch (error) {
    next(error)
  }
})

module.exports = router
