const knex = require('knex')
const { v4: uuidv4 } = require('uuid')

class Products {
  constructor(knexConfig) {
    this.knex = knex(knexConfig)
  }
  async createProduct(product) {
    Object.assign(product, {
      code: uuidv4()
    })
    return new Promise((resolve, reject) => {
      this.knex('products')
        .insert(product)
        .then(() => {
          resolve({
            success: true,
            data: product
          })
        })
        .catch(err => reject(err))
    })
    // .finally(() => {
    //   this.knex.destroy()
    // })
  }

  async getAll() {
    return new Promise((resolve, reject) => {
      this.knex('products')
        //   .where('id', '>', 1)
        .select('*')
        .then(data => {
          const productsResponse = data.map(prod => {
            return JSON.parse(JSON.stringify(prod))
          })
          resolve({
            success: true,
            data: productsResponse
          })
        })
        .catch(err => reject(err))
    })
    // .finally(() => {
    //   this.knex.destroy()
    // })
  }

  async getProduct(productCode) {
    try {
      const data = await this.knex('products')
        .where('code', '=', productCode)
        .select('*')
      if (data.length == 0) {
        return {
          success: false,
          message: 'Product not found'
        }
      }
      const productFormatted = JSON.parse(JSON.stringify(data[0]))
      return {
        success: true,
        data: productFormatted
      }
    } catch (error) {
      console.error(error)
      return {
        success: false,
        message: err.message
      }
    }
  }
  async putByCode(productCode, updatedProp) {
    try {
      await this.knex('products')
        .where('code', '=', productCode)
        .update(updatedProp)
      return {
        success: true,
        message: 'Updated'
      }
    } catch (error) {
      console.error(error)
      return {
        success: false,
        message: error.message
      }
    }
  }

  async deleteById(id) {
    try {
      await this.knex('products').where('id', '=', id).del()
      return {
        success: true,
        message: 'Deleted'
      }
    } catch (error) {
      console.error(error)
      return {
        success: false,
        message: error.message
      }
    }
  }

  async deleteAll() {
    try {
      await this.knex('products').del()
      return {
        success: true,
        message: 'Deleted'
      }
    } catch (error) {
      console.error(error)
      return {
        success: false,
        message: error.message
      }
    }
  }
}

module.exports = Products
