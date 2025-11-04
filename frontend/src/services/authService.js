import { authApi } from '../api/authApi'

export const authService = {
  async login(credentials) {
    try {
      const response = await authApi.login(credentials)
      return response
    } catch (error) {
      throw error
    }
  },

  async register(userData) {
    try {
      const response = await authApi.register(userData)
      return response
    } catch (error) {
      throw error
    }
  },

  async logout() {
    try {
      const response = await authApi.logout()
      return response
    } catch (error) {
      throw error
    }
  },

  async forgotPassword(email) {
    try {
      const response = await authApi.forgotPassword(email)
      return response
    } catch (error) {
      throw error
    }
  },

  async resetPassword(token, newPassword) {
    try {
      const response = await authApi.resetPassword(token, newPassword)
      return response
    } catch (error) {
      throw error
    }
  },

  async getCurrentUser() {
    try {
      const response = await authApi.getCurrentUser()
      return response
    } catch (error) {
      throw error
    }
  }
}
