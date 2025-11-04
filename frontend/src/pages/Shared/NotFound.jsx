import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f5f5f5'
    }}>
      <h1 style={{ fontSize: '72px', margin: '0', color: '#3498db' }}>404</h1>
      <h2 style={{ fontSize: '24px', marginTop: '10px', color: '#333' }}>
        Trang không tìm thấy
      </h2>
      <p style={{ color: '#666', marginTop: '10px' }}>
        Xin lỗi, trang bạn đang tìm kiếm không tồn tại.
      </p>
      <Link 
        to="/" 
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#3498db',
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

export default NotFound
