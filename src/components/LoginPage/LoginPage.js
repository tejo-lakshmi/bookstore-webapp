import React from "react";

const axios = require("axios");

function LoginPage() {
  function login() {
    axios
      .post("http://localhost:5001/api/login", {
        email: "prajwalanagani@gmail.com",
        password: "pass",
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem('accessToken', res.data.accessToken);
      });
  }
  return (
    <div className="LoginPage">
      <h1>Work in progress</h1>
      <button onClick={login}>LOGIN</button>
    </div>
  );
}

export default LoginPage;
