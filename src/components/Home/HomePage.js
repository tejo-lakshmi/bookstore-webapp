import React, { useState, useEffect } from "react";
import Post from "../Posts/Post";
const axios = require("axios");

const token = localStorage.getItem("accessToken")
const config = {
  headers: { Authorization: `Bearer ${token}` }
};

function HomePage() {
  //Send request and get posts
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({})
  
  function getProducts() {
    axios.get("http://localhost:5001/api/products").then((res) => {
      console.log(res.data);
      setPosts(res.data);
    },(err)=>{
      console.log(err);
    });
  }
  function getUserData(){
    axios.get("http://localhost:5001/api/users",config).then((res) => {
      console.log("HERE",res.data);
      setUser(res.data);
    },(err)=>{
      console.log(err)
    })

  }
  useEffect(() => {
    getProducts()
    getUserData()
  },[]);

  return (
    <div className="HomePage">
      <h1>Work in progress</h1>
      <p>{user.email}</p>
      <div>
        {posts.map((item) => (
          <Post post={item}></Post>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
