const { db } = require('../config/firebase-config')

const getProducts = async () => {
  const docRef = await db.collection('products').get()
  const result = []
  docRef.docs.map(doc => {
    result.push({
      id: doc.id,
      ...doc.data()
    })
  })
  return result
}

const setProduct = async (title, value) => {
  const docRef = db.collection('products').doc()
  return await docRef.set({
    image: '/images/product.jpg',
    title: title,
    value: value
  });
}

const updateProduct = async (id, title, value) => {
  try {
    const docRef = db.collection('products').doc(id)
    return await docRef.update({title, value, image: '/images/product.jpg'})
  } catch (e) {
    return e
  }
}

const delProduct = async (id) => {
  try {
    return await db.collection('products').doc(id).delete()
  } catch (e) {
    return e
  }
}

module.exports = {
  getProducts,
  setProduct,
  updateProduct,
  delProduct
}