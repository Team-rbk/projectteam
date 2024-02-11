import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Home from "./Home";
import Jobs from "./Jobs";
import Worker from "./Worker"
import Started from "./Started";
import Footer from "./Footer";
import axios from "axios";
const  Dashboardclient=()=>{

  const [user,setUser]=useState({})
  useEffect(()=>{
    axios.get(`http://localhost:8080/dashboardclient/1`).then((res)=>{
      setUser(res.data[0][0])
    }).catch((err)=>{
      console.log(err);
    })
  },[])
  return (
    <div>
    <Nav user={user}/>
    <Home/>
    <Jobs/>
    <Worker/>
    <Started/>
    <Footer/>
    </div> 
  )
}
export default Dashboardclient;