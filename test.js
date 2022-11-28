const productService = require('./database/products/productService')

let test1 = async () => {
  try {
    await productService.createProduct({
      name: 'Escuadra',
      price: 123.42,
      thumbnail:
        'https://cdn4.iconfinder.com/data/icons/education-759/2050/Education_flat-16-1024.png',
      stock: 10
    })
    await productService.createProduct({
      name: 'Calculadora',
      price: 123.42,
      thumbnail:
        'https://cdn1.iconfinder.com/data/icons/icons-for-a-site-1/64/advantage_calculator-1024.png',
      stock: 10
    })
    await productService.createProduct({
      name: 'Globo terraqueo',
      price: 200.5,
      thumbnail:
        'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-1024.png',
      stock: 10
    })
    await productService.createProduct({
      name: 'Microscopio',
      price: 2100.45,
      thumbnail:
        'https://cdn4.iconfinder.com/data/icons/education-759/2050/Education_flat-10-1024.png',
      stock: 10
    })
    await productService.createProduct({
      name: 'Microscopio',
      price: 2100.45,
      thumbnail:
        'https://cdn4.iconfinder.com/data/icons/education-759/2050/Education_flat-10-1024.png',
      stock: 10
    })
    await productService.createProduct({
      name: 'Telescopio',
      price: 3200.55,
      thumbnail:
        'https://cdn4.iconfinder.com/data/icons/education-759/2050/Education_flat-24-1024.png',
      stock: 10
    })
    await productService.createProduct({
      name: 'Tubos de ensayo',
      price: 900.5,
      thumbnail:
        'https://cdn4.iconfinder.com/data/icons/education-759/2050/Education_flat-05-1024.png',
      stock: 10
    })
    await productService.createProduct({
      name: 'Dragón',
      price: '5000',
      thumbnail:
        'https://cdn4.iconfinder.com/data/icons/medieval-23/340/medieval_dragon_fantasy_monster_mythology_flying_creature-512.png',
      stock: 10
    })
  } catch (error) {
    console.error(error)
  }
}

test1()
