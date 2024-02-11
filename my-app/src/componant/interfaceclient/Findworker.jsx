import React, { useState,useEffect } from "react";
import Nav from "./Nav";
import axios from "axios";
const FindWorker = () => {
  const [worker,setWorker]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:8080/worker').then((res)=>{
      console.log(res.data)
      setWorker(res.data[0])
    }).catch((err)=>{
      console.log(err);
    })
  },[])


  const [search, setSearch] = useState("");

console.log(worker)
  const filteredWorkers = worker.filter(worker => {
    return worker.jobnamee.toLowerCase().includes(search.toLowerCase());
  });
    
 

  return (
    <div>
      <Nav />
      <div className="container mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4">List of Workers</h2>
        <input
          type="text"
          placeholder="Search by job title..."
          className="border border-gray-300 rounded px-4 py-2 mb-4 w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <ul>
          {filteredWorkers.map(worker => (
            <li key={worker.idemployer} className="mb-4">
              <div className="flex items-center">
                <img src={worker.imagee} className="w-16 h-16 rounded-full mr-4" />
                <div>
                  <h3 className="text-lg font-semibold">{`${worker.namee} ${worker.lastnamee}`}</h3>
                  <p className="text-gray-600 mb-1">{worker.jobnamee}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FindWorker;
