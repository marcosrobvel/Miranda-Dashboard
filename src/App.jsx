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
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import NewBooking from "./pages/NewBooking.jsx";


function App() {


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
              </Route>
              <Route path="/login" element={<Login />} />
            </Routes>
          </Router>
        </DarkThemeProvider>
      </AuthProvider>
    </Provider>
  );
}

const ProtectedLayout = () => {
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