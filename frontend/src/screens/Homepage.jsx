import React from 'react'
import Header from '../components/Header.jsx'

const Homepage = () => {
  return (
    <div>
      <Header />
      <div style={{ padding: '2rem' }}>
        <h1>Welcome to SmartCity</h1>
        <p>Your smart city management dashboard</p>
      </div>
    </div>
  )
}

export default Homepage