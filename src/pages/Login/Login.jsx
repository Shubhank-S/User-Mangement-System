import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h1>USER MANGEMENT</h1>
        <input
          value={email}
          className="input"
          type="email"
          placeholder="Enter Your Email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          value={password}
          className="input"
          type="password"
          placeholder="Enter Your Password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="button">Submit</button>
      </form>
    </>
  );
}

export default Login;
