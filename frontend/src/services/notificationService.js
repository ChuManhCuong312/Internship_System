export const notificationService = {
  success(message, duration = 3000) {
    this.show(message, 'success', duration)
  },

  error(message, duration = 3000) {
    this.show(message, 'error', duration)
  },

  warning(message, duration = 3000) {
    this.show(message, 'warning', duration)
  },

  info(message, duration = 3000) {
    this.show(message, 'info', duration)
  },

  show(message, type = 'info', duration = 3000) {
    // Simple console notification for now
    // Can be replaced with a proper toast library like react-toastify
    const emoji = {
      success: '✅',
      error: '❌',
      warning: '⚠️',
      info: 'ℹ️'
    }

    console.log(`${emoji[type]} ${message}`)
    
    // For browser notifications (optional)
    if (typeof window !== 'undefined' && window.alert && type === 'error') {
      // Only show browser alerts for errors in development
      if (process.env.NODE_ENV === 'development') {
        console.error(message)
      }
    }
  }
}
