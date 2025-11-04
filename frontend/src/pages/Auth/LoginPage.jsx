import React, { useState, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import './AuthPages.css'

const LoginPage = () => {
  const navigate = useNavigate()
  const { login, isAuthenticated } = useContext(AuthContext)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/intern/dashboard')
    }
  }, [isAuthenticated, navigate])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const result = await login(formData)
      
      if (result.success) {
        const userRole = result.data.user.role
        
        switch (userRole) {
          case 'ADMIN':
            navigate('/admin/dashboard')
            break
          case 'HR':
            navigate('/hr/dashboard')
            break
          case 'MENTOR':
            navigate('/mentor/dashboard')
            break
          case 'INTERN':
            navigate('/intern/dashboard')
            break
          default:
            navigate('/')
        }
      } else {
        setError(result.error)
      }
    } catch (err) {
      setError('Đã xảy ra lỗi. Vui lòng thử lại.')
    } finally {
      setLoading(false)
    }
  }

  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`)
    // TODO: Implement social login
  }

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">Login</h2>
        
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="auth-form">
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

          <div className="forgot-password-link">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-submit"
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>

        <div className="divider">
          <span>or continue with</span>
        </div>

        <div className="social-login">
          <button 
            className="social-btn google-btn"
            onClick={() => handleSocialLogin('google')}
            type="button"
          >
            <img src="https://www.google.com/favicon.ico" alt="Google" />
          </button>
          <button 
            className="social-btn github-btn"
            onClick={() => handleSocialLogin('github')}
            type="button"
          >
            <img src="https://github.com/favicon.ico" alt="GitHub" />
          </button>
          <button 
            className="social-btn facebook-btn"
            onClick={() => handleSocialLogin('facebook')}
            type="button"
          >
            <img src="https://www.facebook.com/favicon.ico" alt="Facebook" />
          </button>
        </div>

        <div className="auth-footer">
          <span>Don't have an account yet? </span>
          <Link to="/register" className="auth-link">Register Here</Link>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
