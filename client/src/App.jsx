import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/user/dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App
