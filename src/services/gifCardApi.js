import axios from 'axios'
import axiosIntance from './axiosInstance'

const endPoint = process.env.REACT_APP_API_URL || 'http://localhost:3003'

const getGiftCards = async () => {
  return await axiosIntance.get('/gift-cards')
}

const createGiftCardService = async (giftCard) => {
  return await axiosIntance.post('/gift-cards', giftCard)
}

const getAllTransactions = async () => {
  return await axiosIntance.get('/credits/transactions')
}

const buyCredits = async (data) => {
  return await axiosIntance.put('/credits', data)
}

const getCredits = async (data) => {
  return await axiosIntance.get('/credits')
}

const getCardValidations = async (data) => {
  return await axiosIntance.get('/validations/gift-card')
}

const cardByValidate = async (id) => {
  return await axiosIntance.put(`/validations/gift-card/${id}`, {})
}

// unprotected routes
const getActivatedGiftCard = async (id) => {
  return await axios.get(`${endPoint}/activated/gift-cards/${id}`)
}

const activatedCard = async (id, data) => {
  return await axios.put(`${endPoint}/activated/gift-cards/${id}`, data)
}

const myGifts = async (data) => {
  return await axios.get(`${endPoint}/customer/gifts?phone=${data}`)
}

export {
  getGiftCards,
  createGiftCardService,
  getAllTransactions,
  buyCredits,
  getCredits,
  getActivatedGiftCard,
  activatedCard,
  myGifts,
  getCardValidations,
  cardByValidate,
}
