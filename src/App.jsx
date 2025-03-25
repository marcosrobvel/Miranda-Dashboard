import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Header from "./components/Header.jsx";
import BookingList from "./pages/BookingList.jsx";
import MenuDrawer from "./components/MenuDrawer.jsx";
import { DarkThemeProvider } from "./context/DarkTheme.jsx";

function App() {
  return (
    <>
    <DarkThemeProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookings" element={<BookingList />} />
        </Routes>
      </Router>
    </DarkThemeProvider>
    </>
  );
}

export default App;
