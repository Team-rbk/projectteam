import React from "react"
import Login from "./Login.jsx";
import SignUpc from "./SignUpc.jsx"
import Home from "./Home.jsx";
import SignUpe from "./SignUpe.jsx";
import HomeEmployer from "./HomeEmployer.jsx";
import { BrowserRouter,Routes,Route } from "react-router-dom";
const  App=()=>{
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/SignUpc" element={<SignUpc/>}></Route>
      <Route path="/SignUpe" element={<SignUpe/>}></Route>
      <Route path="/Home/:id" element={<Home />}></Route>
      <Route path="/HomeEmployer/:id" element={<HomeEmployer />}></Route>

    </Routes>
    </BrowserRouter>
  )
}
export default App;