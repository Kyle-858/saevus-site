import React, { useState } from 'react'
import './App.css'
import Home from './Home.jsx'
import Nav from './components/Nav.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Nav />
      <Routes>
      <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
  )
}

export default App
