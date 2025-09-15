import { BrowserRouter, Route, Routes } from "react-router-dom"
import Landing from "./components/Landing"
import YouWant from "./helper/YouWant"
import Signup from "./components/Signup"
import Signin from "./components/Signin"
import Dashboard from "./components/Dashboard"
import GetProfile from "./components/GetProfile"
import SellFood from "./components/SellFood"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path = "/youwant" element = {<YouWant></YouWant>}></Route>
        <Route path = "/signup" element = {<Signup></Signup>}></Route>
        <Route path="/signin" element = {<Signin></Signin>}></Route>
        <Route path = "/dashboard" element = {<Dashboard></Dashboard>}></Route>
        <Route path="/getProfile" element = {<GetProfile></GetProfile>}></Route>
        <Route path = "/sellFood" element = {<SellFood></SellFood>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
