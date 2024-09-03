import { Routes, Route } from "react-router-dom"
import React from 'react'
import LandingPage from './pages/landing/landing'
import Register from './pages/auth/register'
import Login from './pages/auth/login'
import NotFoundPage from './pages/404/notFound'
import Container from "./pages/display/container"

function App() {

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth/register" element={<Register />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/display" element={<Container /> } />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
