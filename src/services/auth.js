import axios from 'axios'

const endPoint = process.env.REACT_APP_API_URL || 'http://localhost:3003'
const baseUrl =`${endPoint}/auth/login`

const auth = async (values) => {
  return await axios.post(baseUrl, values)
}

export default auth