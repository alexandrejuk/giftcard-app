import axios from 'axios'
import { pathOr } from 'ramda'
import qs from 'qs'

const endPoint = process.env.REACT_APP_API_URL || 'http://localhost:3003'
const baseURL = `${endPoint}/api`
const axiosInstance = axios.create({ baseURL })

axiosInstance.interceptors.request.use((config) => ({
  ...config,
  headers: {
    ...config.headers,
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
  paramsSerializer: qs.stringify,
}))

axiosInstance.interceptors.response.use(
  (response) => {
    return pathOr(null, ['data'], response)
  },
  (error) => {
  const statusCode = pathOr(null, ['response', 'status'], error)

  if (statusCode === 401 || statusCode === 403) {
    window.onerror(`authorization: ${statusCode}`, window.location.href)
    window.location.href = '/#/login'
  }
  return Promise.reject(error.response);
})



export default axiosInstance
