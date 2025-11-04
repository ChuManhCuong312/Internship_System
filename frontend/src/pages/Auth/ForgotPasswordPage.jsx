import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './AuthPages.css'

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setMessage('')
    setLoading(true)

    try {
      // TODO: Implement forgot password logic
      console.log('Forgot password for:', email)
      
      // Simulate API call
      setTimeout(() => {
        setMessage('Password reset link has been sent to your email!')
        setLoading(false)
        setEmail('')
      }, 1000)
    } catch (err) {
      setError('Failed to send reset email. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">Forgot Password</h2>
        
        {message && (
          <div className="success-message">
            {message}
          </div>
        )}

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <p className="auth-description">
          Enter your email address and we'll send you a link to reset your password.
        </p>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="username@gmail.com"
              required
              className="form-input"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-submit"
          >
            {loading ? 'Sending...' : 'Send Reset Link'}
          </button>
        </form>

        <div className="auth-footer">
          <Link to="/login" className="auth-link">Back to Login</Link>
        </div>
      </div>
    </div>
  )
}

export default ForgotPasswordPage
