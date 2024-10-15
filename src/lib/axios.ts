import axios from 'axios'
import { getSession } from './auth'

export const api = axios.create({
  baseURL: 'http://localhost:3001/',
})

api.interceptors.request.use(
  async (config) => {
    const session = await getSession()

    if (session && session.access_token) {
      config.headers.Authorization = `Bearer ${session.access_token}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)
