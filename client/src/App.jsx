import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import './App.css'
import ProtectedRoute from './pages/ProtectedRoute'
import Salaysay from './pages/Salaysay'
import Lee from './pages/Lee'
import Santos from './pages/Santos'
import Pata from './pages/Pata'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/' element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/admin' element={<Salaysay />} />
          <Route path='/manager' element={<Santos />} />
          <Route path='/crew' element={<Lee />} />
          <Route path='/staff' element={<Pata />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
