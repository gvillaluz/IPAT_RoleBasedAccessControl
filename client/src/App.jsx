import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import './App.css'
import ProtectedRoute from './pages/ProtectedRoute'
import AdminDashboard from './pages/AdminDashboard'
import CrewDashboard from './pages/CrewDashboard'
import ManagerDashboard from './pages/ManagerDashboard'
import StaffDashboard from './pages/StaffDashboard'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/' element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/admin-dashboard' element={<AdminDashboard />} />
          <Route path='/manager-dashboard' element={<ManagerDashboard />} />
          <Route path='/crew-dashboard' element={<CrewDashboard />} />
          <Route path='/staff-dashboard' element={<StaffDashboard />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
