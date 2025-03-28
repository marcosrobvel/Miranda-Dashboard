import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Header from "./components/Header.jsx";
import BookingList from "./pages/BookingList.jsx";
import { DarkThemeProvider } from "./context/DarkTheme.jsx";
import RoomsList from "./pages/RoomsList.jsx";
import UsersList from "./pages/UsersList.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <>
    <DarkThemeProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookings" element={<BookingList />} />
          <Route path="/rooms" element={<RoomsList />} />
          <Route path="/users" element={<UsersList />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </DarkThemeProvider>
    </>
  );
}

export default App;
