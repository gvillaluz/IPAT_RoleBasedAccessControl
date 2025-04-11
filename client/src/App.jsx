import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'
import './App.css'
import ProtectedRoute from './pages/ProtectedRoute'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/' element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/user/dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
