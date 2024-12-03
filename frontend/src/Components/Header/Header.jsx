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
                    backgroundColor: "#0b102b", display: "flex",
                     justifyContent: "center",
                
                }}>
                <div id='navBar'>
                    <div className='navOptions'>
                        <img src={TodoIcon} height={"60vmax"} />
                        <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}> TodoApp </NavLink>
                    </div>
                    <div className='navOptions'>
                        <img src={counterIcon} height={"60vmax"} />
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