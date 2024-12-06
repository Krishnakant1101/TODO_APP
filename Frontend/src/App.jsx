import Header from "./Components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from './Components/Footer/Footer'
function App() {
  

  return (
 <>
 <Header/>
 <Outlet/>
 <Footer/>
 </>
  )
}

export default App
