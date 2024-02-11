import React, { useState, useEffect } from 'react';
import Nav from "./Nav";
import axios from 'axios';

const Post = () => {
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8080/dashboardclient/1`)
      .then((res) => {
        setUser(res.data[0][0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'teamrbk');
    const response = await axios.post('https://api.cloudinary.com/v1_1/dp9xsppna/upload', formData);
    console.log(response.data.secure_url);
    setImage(response.data.secure_url);
    // const obj={
    //   "imagep":image,
    //   "statutp": content,
    //   "titlep":title,
    //   "client_idclient":"1"
    // }
    // const res=await axios.post('http://localhost:8080/postjob', obj);
    // if(res){
    //   console.log('added')
    // }
  };

  return (
    <div style={{ backgroundColor: '#F7FAF7' }} className="h-screen">
      <Nav user={user} />
      <div className="container mt-40 mx-auto">
        <div className="max-w-4xl mx-auto p-10 bg-white shadow-md rounded-lg ">
          <div className="md:flex">
            <div className="md:w-2/3">
              <img className="w-full h-auto" src="https://obmassets.s3.ap-south-1.amazonaws.com/images/post-job.jpg" alt="Post" />
              <input
                className="border rounded w-full py-2 px-3 text-gray-700 mt-4"
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
            <div className="md:w-1/3 p-4 md:p-6">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                  Title
                </label>
                <input
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                  id="title"
                  type="text"
                  placeholder="Enter title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
                  Content
                </label>
                <textarea
                  className="border rounded w-full py-2 px-3 text-gray-700"
                  id="content"
                  placeholder="Enter content"
                  rows="4"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                ></textarea>
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleSubmit}
              >
                Save Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
