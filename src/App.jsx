import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Header from './components/Header.jsx'
import BookingList from './pages/BookingList.jsx'

function App() {
  

  return (
    <>
    <Router>
      <Header />
        <Routes>
          
            <Route path="/" element={<Home />} />
            <Route path="/bookings" element={<BookingList />} />
          
        </Routes>
     
    </Router>
    </>
  )
}

export default App
