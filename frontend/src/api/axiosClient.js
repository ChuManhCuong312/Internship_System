import axios from 'axios'
import { storageService } from '../services/storageService'

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})

// Request interceptor
axiosClient.interceptors.request.use(
  (config) => {
    const token = storageService.getToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor
axiosClient.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    if (error.response) {
      // Handle 401 Unauthorized
      if (error.response.status === 401) {
        storageService.clearAuth()
        window.location.href = '/login'
      }

      // Handle 403 Forbidden
      if (error.response.status === 403) {
        window.location.href = '/forbidden'
      }
    }

    return Promise.reject(error)
  }
)

export default axiosClient
