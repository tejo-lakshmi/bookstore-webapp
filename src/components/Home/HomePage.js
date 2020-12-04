import React from "react";
import Post from "../Posts/Post";

function HomePage() {
  //Send request and get posts
  const posts = [{name:'Something',subject:'math',years_used:'3',price:'23'},];
  return (
    <div className="HomePage">
      <h1>Work in progress</h1>
      <div>
        {posts.map((item) => (
          <Post post={item}></Post>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
