import { Outlet } from "react-router-dom"
import Navbar from "./Components/Home/Shared/Navbar"
import Footer from "./Components/Home/Shared/Footer"


function App() {


  return (
    <>
      <Navbar></Navbar>
   
   <Outlet></Outlet>
   <Footer></Footer>
   
    </>
  )
}

export default App
