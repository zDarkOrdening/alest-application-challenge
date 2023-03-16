const router = require('express').Router()
const {getAllProducts, createProduct, putProduct, deleteProduct } = require('./product-service')

router.get('/', (req, res) => {
  getAllProducts()
    .then(result => {
      return res.json(result)   
    })
    .catch(e => {
      return res.status(e.code || 500).json(e.message)
    })
});

router.post('/', (req, res) => {
  const { title, value } = req.body;
  createProduct(title, value)
    .then(result => {
      return res.status(201).json(result)   
    })
    .catch(e => {
      return res.status(e.code || 500).json(e.message)
    })
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { title, value } = req.body;
  putProduct(id, title, Number(value))
    .then(result => {
      return res.json(result)   
    })
    .catch(e => {
      return res.status(e.code || 500).json(e.message)
    })
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  deleteProduct(id)
    .then(result => {
      return res.json(result)   
    })
    .catch(e => {
      return res.status(e.code || 500).json(e.message)
    })
});

module.exports = router;