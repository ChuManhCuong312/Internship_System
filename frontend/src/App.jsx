import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { RoleProvider } from './context/RoleContext'
import AppRouter from './router/AppRouter'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <RoleProvider>
          <AppRouter />
        </RoleProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
