import axiosClient from './axiosClient'

export const authApi = {
  login(credentials) {
    return axiosClient.post('/auth/login', credentials)
  },

  register(userData) {
    return axiosClient.post('/auth/register', userData)
  },

  logout() {
    return axiosClient.post('/auth/logout')
  },

  forgotPassword(email) {
    return axiosClient.post('/auth/forgot-password', { email })
  },

  resetPassword(token, newPassword) {
    return axiosClient.post('/auth/reset-password', { token, newPassword })
  },

  getCurrentUser() {
    return axiosClient.get('/auth/me')
  },

  refreshToken(refreshToken) {
    return axiosClient.post('/auth/refresh-token', { refreshToken })
  }
}
