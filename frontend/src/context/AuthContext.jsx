import React, { createContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { storageService } from '../services/storageService'
import { authService } from '../services/authService'

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const initAuth = async () => {
      try {
        const token = storageService.getToken()
        const savedUser = storageService.getUser()

        if (token && savedUser) {
          setUser(savedUser)
          setIsAuthenticated(true)
        }
      } catch (error) {
        console.error('Init auth error:', error)
        storageService.clearAuth()
      } finally {
        setLoading(false)
      }
    }

    initAuth()
  }, [])

  const login = async (credentials) => {
    try {
      const response = await authService.login(credentials)
      const { token, user: userData } = response.data

      storageService.setToken(token)
      storageService.setUser(userData)
      setUser(userData)
      setIsAuthenticated(true)

      return { success: true, data: response.data }
    } catch (error) {
      console.error('Login error:', error)
      return { success: false, error: error.response?.data?.message || 'Đăng nhập thất bại' }
    }
  }

  const logout = () => {
    storageService.clearAuth()
    setUser(null)
    setIsAuthenticated(false)
  }

  const updateUser = (userData) => {
    setUser(userData)
    storageService.setUser(userData)
  }

  const value = {
    user,
    loading,
    isAuthenticated,
    login,
    logout,
    updateUser
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
}
