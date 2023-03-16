const { getProducts, setProduct, updateProduct, delProduct } = require('../../../repository/product')

const getAllProducts = async () => {
  try {
    return await getProducts();
  }
  catch (e) {
    throw new e
  }
}

const createProduct = async (title, value) => {
  try {
    return await setProduct(title, value);
  }
  catch (e) {
    throw new e
  }
}

const putProduct = async (id, title, value) => {
  try {
    return await updateProduct(id, title, value);
  }
  catch (e) {
    throw new e
  }
}

const deleteProduct = async (id) => {
  try {
    return await delProduct(id);
  }
  catch (e) {
    throw new e
  }
}

module.exports = {
  getAllProducts,
  createProduct,
  putProduct,
  deleteProduct
}