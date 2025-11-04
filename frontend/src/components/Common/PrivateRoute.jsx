import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import PropTypes from 'prop-types'
import { AuthContext } from '../../context/AuthContext'
import { RoleContext } from '../../context/RoleContext'
import LoadingSpinner from './LoadingSpinner'

const PrivateRoute = ({ allowedRoles }) => {
  const { isAuthenticated, loading } = useContext(AuthContext)
  const { hasRole } = useContext(RoleContext)

  if (loading) {
    return <LoadingSpinner />
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  if (allowedRoles && !hasRole(allowedRoles)) {
    return <Navigate to="/forbidden" replace />
  }

  return <Outlet />
}

PrivateRoute.propTypes = {
  allowedRoles: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ])
}

export default PrivateRoute
