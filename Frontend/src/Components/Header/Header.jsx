import React from 'react';
import Box from '@mui/material/Box';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
    const navigate = useNavigate();

    // Check if user is authenticated by looking for the token
    const isAuthenticated = !!localStorage.getItem('userToken');

    // Logout handler
    const handleLogout = () => {
        localStorage.removeItem('userToken'); // Remove the token
        navigate('/Login'); // Redirect to the login page
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: '#253042',  height:"80px"}}>
            <Toolbar>
                {/* Logo */}
                <img
                    src="https://cdn-icons-png.flaticon.com/256/6782/6782237.png"
                    alt="Logo"
                    height="100px"
                    style={{
                        marginRight: '20px',
                        filter: 'sepia(50%) brightness(1.2) hue-rotate(40deg)',
                    }}
                />

                
               

                {/* Navigation Links */}
                <Box sx={{ display: 'flex', alignItems: 'center',marginLeft:"200px",fontSize:"20px" ,justifyContent:"space-around",width:"100%" }}>
                    <NavLink id='navlink'
                        to="/"
                        className={({ isActive }) => (isActive ? 'navLink active' : 'navLink')}
                    >
                        TodoApp
                    </NavLink>
                    <NavLink
                        to="/CounterApp"
                        className={({ isActive }) => (isActive ? 'navLink active' : 'navLink')}
                    >
                        CounterApp
                    </NavLink>
                    <NavLink
                        to="/UserDataTable"
                        className={({ isActive }) => (isActive ? 'navLink active' : 'navLink')}
                    >
                        UserTable
                    </NavLink>
                    {isAuthenticated ? (
                        <Button
                            onClick={handleLogout}
                            sx={{ color: '#fff', textTransform: 'none', fontWeight: 'bold' }}
                        >
                            Logout
                        </Button>
                    ) : (
                        <NavLink
                            to="/Login"
                            className={({ isActive }) => (isActive ? 'navLink active' : 'navLink')}
                        >
                            Login
                        </NavLink>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
