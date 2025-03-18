import axios from "axios"

export const getCollections = async () => {
  const collections = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/collections`).then((response) =>{return response.data}).catch((error) =>(console.error(error)));
  return collections
}

export const getCollectionDetails = async (collectionId: string) => {
  const collection = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections/${collectionId}`)
  return await collection.json()
}

export const getProducts = async () => {
  const products = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`).then((response) =>{return response.data}).catch((error) =>(console.error(error)));
  return products
}

export const getProductDetails = async (productId: string) => {
  const product = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`).then((response) =>{return response.data}).catch((error) =>(console.error(error)));
  return product
}

export const getSearchedProducts = async (query: string) => {
  const searchedProducts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search/${query}?maxPrice=${15000}`)
  return await searchedProducts.json()
}

export const getOrders = async (customerId: string) => {
  const orders = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/orders/customers/${customerId}`).then((response) =>{return response.data}).catch((error) =>(console.error(error)));
  return orders
}

export const getOrderDetails = async (orderId: string) => {
  const product = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/orders/${orderId}`).then((response) =>{return response.data}).catch((error) =>(console.error(error)));
  return product
}

export const getRelatedProducts = async (productId: string) => {
  const relatedProducts = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}/related`).then((response) =>{return response.data}).catch((error) =>(console.error(error)));
  return relatedProducts
}

export const toogleWishlistService = async (productId: string) => {
  const response = await axios.post(`/api/users/wishlist`,{productId}).then((response) =>{return response.data}).catch((error) =>(console.error(error)));
  return response
}
export const addToSearchHistory = async (query: string) => {
  const response = await axios.post(`/api/users/search`,{query}).then((response) =>{return response.data}).catch((error) =>(console.error(error)));
  return response
}
export const getRecomendedProducts = async () => {
   await axios.get("/api/users").then((response) =>{console.log(response.data)}).catch(err =>console.error(err))

  const recomendedProducts = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/recomendations`,{wishlist:[],searchHistory:[]}).then((response) =>{return response.data}).catch((error) =>(console.error(error)));
  return recomendedProducts
}