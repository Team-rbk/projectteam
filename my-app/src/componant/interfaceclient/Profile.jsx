import React, { useEffect, useState } from "react";
import Nav from './Nav';

import axios from "axios";
const Profile = () => {
  const [user,setUser]=useState({})
  useEffect(()=>{
    axios.get(`http://localhost:8080/dashboardclient/1`).then((res)=>{
      console.log(res.data[0][0])
      setUser(res.data[0][0])
    }).catch((err)=>{
      console.log(err);
    })
  },[])
  return (
    <div style={{ backgroundColor: '#F7FAF7' }} className=" h-screen">
 <Nav user={user}/>
    <div   className='flex justify-center pt-40'>
    <div className="max-w-md mx-autoc bg-white shadow-lg rounded-lg ">
        
        <div className="px-4 py-2">
        <div className="flex justify-center">
          <img className="h-32 w-32 rounded-full" src={user.imagec} />
        </div>
        <div className=" mt-4">
          <h1 className=" text-center text-3xl text-green-700 font-semibold">{user.namec} {user.lastnamec}</h1>
          <p className=" text-1xl px-5 my-5 text-gray-600">{user.descriptionc}</p>
        </div>
      </div>
      <div className="bg-green-500 px-4 py-2 mt-2">
        <ul>
          <li className="flex items-center">
            <span className="mr-2"><i className=""></i></span>
            <span>{user.emailc}</span>
          </li>
          <li className="flex items-center mt-2">
            <span className="mr-2"><i className=""></i></span>
            <span>{user.addressc}</span>
          </li>
        </ul>
      </div>
    </div>
        </div>
    </div>
   
      
  );
}

export default Profile;
