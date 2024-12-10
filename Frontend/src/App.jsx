import React, { createContext, useState, useEffect } from 'react';
import Header from "./Components/Header/Header";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from './Components/Footer/Footer';

// Create AuthContext
export const AuthContext = createContext();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Check authentication status on app load
  useEffect(() => {
    const token = localStorage.getItem('userToken');
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userToken'); // Remove the token
    setIsAuthenticated(false); // Update auth state
    navigate('/Login'); // Redirect to login page
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, handleLogout }}>
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    </AuthContext.Provider>
  );
}

export default App;
