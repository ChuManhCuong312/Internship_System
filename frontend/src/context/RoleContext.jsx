import React, { createContext, useContext } from 'react'
import PropTypes from 'prop-types'
import { AuthContext } from './AuthContext'

export const RoleContext = createContext(null)

export const RoleProvider = ({ children }) => {
  const { user } = useContext(AuthContext)

  const hasRole = (requiredRole) => {
    if (!user || !user.role) return false
    
    if (Array.isArray(requiredRole)) {
      return requiredRole.includes(user.role)
    }
    
    return user.role === requiredRole
  }

  const isAdmin = () => hasRole('ADMIN')
  const isHR = () => hasRole('HR')
  const isMentor = () => hasRole('MENTOR')
  const isIntern = () => hasRole('INTERN')

  const value = {
    hasRole,
    isAdmin,
    isHR,
    isMentor,
    isIntern,
    currentRole: user?.role || null
  }

  return (
    <RoleContext.Provider value={value}>
      {children}
    </RoleContext.Provider>
  )
}

RoleProvider.propTypes = {
  children: PropTypes.node.isRequired
}
