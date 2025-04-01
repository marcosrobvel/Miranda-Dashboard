import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Header from "./components/Header.jsx";
import BookingList from "./pages/BookingList.jsx";
import { DarkThemeProvider } from "./context/DarkTheme.jsx";
import RoomsList from "./pages/RoomsList.jsx";
import UsersList from "./pages/UsersList.jsx";
import Contact from "./pages/Contact.jsx";
import { AuthProvider, useAuth } from "./context/AuthContext.jsx";
import Login from "./components/login/Login.jsx";


function App() {
  return (
    <AuthProvider>
      <DarkThemeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<ProtectedLayout />}>
              <Route index element={<Home />} />
              <Route path="/bookings" element={<BookingList />} />
              <Route path="/rooms" element={<RoomsList />} />
              <Route path="/users" element={<UsersList />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </DarkThemeProvider>
    </AuthProvider>
  );
}

const ProtectedLayout = () => {
  const { state } = useAuth();
  if (!state.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return (
    <>
      <Header /> 
      <Outlet /> 
    </>
  );
};

export default App;