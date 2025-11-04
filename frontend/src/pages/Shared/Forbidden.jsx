import React from 'react'
import { Link } from 'react-router-dom'

const Forbidden = () => {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f5f5f5'
    }}>
      <h1 style={{ fontSize: '72px', margin: '0', color: '#e74c3c' }}>403</h1>
      <h2 style={{ fontSize: '24px', marginTop: '10px', color: '#333' }}>
        Truy cập bị từ chối
      </h2>
      <p style={{ color: '#666', marginTop: '10px' }}>
        Bạn không có quyền truy cập trang này.
      </p>
      <Link 
        to="/" 
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#e74c3c',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '4px'
        }}
      >
        Về trang chủ
      </Link>
    </div>
  )
}

export default Forbidden
