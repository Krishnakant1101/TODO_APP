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
                     width: "100%",
                    backgroundColor: "#8a8f42", display: "flex",
                     justifyContent: "center",
                
                }}>
                  
                <div id='navBar'>

                <img src={"https://cdn-icons-png.flaticon.com/256/6782/6782237.png"}  style={{marginLeft:"30px",filter: "sepia(50%) brightness(1.2) hue-rotate(40deg)"}} height={"120px"}/>
                   
                   <div id='navSecondDiv'>
                    <div className='navOptions'>
                   
                        <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}> TodoApp </NavLink>
                    </div>
                    <div className='navOptions'>
                       
                        <NavLink to='/CounterApp' className={({isActive})=>(isActive?'active':"")}>
                            CounterApp
                        </NavLink>
                    </div>

                    <div className='navOptions'>
                       
                       <NavLink to='/CounterApp' className={({isActive})=>(isActive?'active':"")}>
                           Table
                       </NavLink>
                   </div>

                   <div className='navOptions'>
                       
                       <NavLink to='/CounterApp' className={({isActive})=>(isActive?'active':"")}>
                           Login
                       </NavLink>
                   </div>
                   </div>
                </div>

            </Box>
        
           </>
    )
}

export default Header;    