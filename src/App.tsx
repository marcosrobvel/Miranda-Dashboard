import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import BookingList from "./pages/BookingList";
import { DarkThemeProvider } from "./context/DarkTheme";
import RoomsList from "./pages/RoomsList";
import UsersList from "./pages/UsersList";
import Contact from "./pages/Contact";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Login from "./components/login/Login";
import { Provider } from "react-redux";
import { store } from "./app/store";
import NewBooking from "./pages/NewBooking";
import EditBooking from "./pages/UpdateBooking";
import React, { JSX } from "react";

function App(): JSX.Element {
  return (
    <Provider store={store}>
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
                <Route path="/newbooking" element={<NewBooking />} />
                <Route path="/editbooking" element={<EditBooking />} />
              </Route>
              <Route path="/login" element={<Login />} />
            </Routes>
          </Router>
        </DarkThemeProvider>
      </AuthProvider>
    </Provider>
  );
}

const ProtectedLayout = (): JSX.Element => {
  const { state } = useAuth();
  const logged = localStorage.getItem('logged');
  if (!state.isAuthenticated && !logged) {
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
