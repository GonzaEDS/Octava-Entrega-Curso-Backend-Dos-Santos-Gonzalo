const express = require('express')
const roleMiddleware = require('../../../middlewares/roleMiddleware')
const router = express.Router()
const _ = require('lodash')

// const products = require('./../../../storage/products')
const productService = require('../../../../database/products/productService')

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
    res.status(200).json(data)
  } catch (error) {
    next(error)
  }
})

router.get('/', async (_req, res, next) => {
  try {
    // let data = await products.getAll()
    let data = await productService.getAll()
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

router.get('/:code', async (req, res, next) => {
  try {
    let { code } = req.params
    // const requestedProd = await products.getById(parseInt(id))
    const requestedProd = await productService.getProduct(code)

    if (requestedProd) {
      res.status(200).json(requestedProd)
    } else {
      res.status(404).json({
        response: 'can not find'
      })
    }
  } catch (error) {
    next(error)
  }
})

router.put('/:code', roleMiddleware, async (req, res, next) => {
  let { code } = req.params
  let { body } = req
  try {
    // let data = await products.putById(id, req.body)
    let data = await productService.putByCode(code, body)
    if (data) {
      res.status(200).json({
        response: data
      })
    } else {
      res.status(404).json({
        response: 'Can not find'
      })
    }
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', roleMiddleware, async (req, res, next) => {
  let { id } = req.params
  try {
    // let data = await products.deleteById(id)
    let data = await productService.deleteById(id)
    if (data) {
      res.status(200).json({
        response: 'product deleted'
      })
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
