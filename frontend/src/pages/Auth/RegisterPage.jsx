import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './AuthPages.css'

const RegisterPage = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    setLoading(true)
    
    try {
      // TODO: Implement registration logic
      console.log('Register:', formData)
      // Simulate API call
      setTimeout(() => {
        setLoading(false)
        navigate('/login')
      }, 1000)
    } catch (err) {
      setError('Registration failed. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">Register</h2>
        
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="username@gmail.com"
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="username@gmail.com"
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label>Re-enter Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter Password"
              required
              className="form-input"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-submit"
          >
            {loading ? 'Signing up...' : 'Sign up'}
          </button>
        </form>

        <div className="auth-footer">
          <span>Already have an Account? </span>
          <Link to="/login" className="auth-link">Sign in</Link>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
