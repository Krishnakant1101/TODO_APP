import Box from '@mui/material/Box';
import './Header.css';
import TodoIcon from "../../Images/to-do-list.png";
import counterIcon from "../../Images/counter.png";
import {NavLink } from 'react-router-dom';
function Header() {
    return (
        <>
            <Box
                sx={{
                    height: "20vh", width: "100%",
                    backgroundColor: "#8a8f42", display: "flex",
                     justifyContent: "center",
                
                }}>
                <div id='navBar'>
                    <div className='navOptions'>
                        <img src={"https://cdn-icons-png.flaticon.com/128/6388/6388986.png"} height={"30vmax"} />
                        <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}> TodoApp </NavLink>
                    </div>
                    <div className='navOptions'>
                        <img src={"https://cdn-icons-png.flaticon.com/128/6434/6434555.png"} height={"30vmax"} />
                        <NavLink to='/CounterApp' className={({isActive})=>(isActive?'active':"")}>
                            CounterApp
                        </NavLink>
                    </div>

                </div>

            </Box>
        
           </>
    )
}

export default Header;