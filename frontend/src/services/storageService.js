const TOKEN_KEY = 'internship_token'
const USER_KEY = 'internship_user'

export const storageService = {
  // Token management
  getToken() {
    return localStorage.getItem(TOKEN_KEY)
  },

  setToken(token) {
    localStorage.setItem(TOKEN_KEY, token)
  },

  removeToken() {
    localStorage.removeItem(TOKEN_KEY)
  },

  // User management
  getUser() {
    const userStr = localStorage.getItem(USER_KEY)
    try {
      return userStr ? JSON.parse(userStr) : null
    } catch (error) {
      console.error('Error parsing user data:', error)
      return null
    }
  },

  setUser(user) {
    localStorage.setItem(USER_KEY, JSON.stringify(user))
  },

  removeUser() {
    localStorage.removeItem(USER_KEY)
  },

  // Clear all auth data
  clearAuth() {
    this.removeToken()
    this.removeUser()
  },

  // Generic storage methods
  get(key) {
    return localStorage.getItem(key)
  },

  set(key, value) {
    localStorage.setItem(key, value)
  },

  remove(key) {
    localStorage.removeItem(key)
  },

  clear() {
    localStorage.clear()
  }
}
