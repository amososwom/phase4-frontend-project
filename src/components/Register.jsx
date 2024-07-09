import React, { useState } from "react";


function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle register logic here
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="title">Register</div>
        <div className="input-group">
          <label>
            <input
              type="text"
              className="input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <span>Username</span>
          </label>
        </div>
        <div className="input-group">
          <label>
            <input
              type="email"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span>Email</span>
          </label>
        </div>
        <div className="input-group">
          <label>
            <input
              type="password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span>Password</span>
          </label>
        </div>
        <button type="submit" className="submit">
          Register
        </button>
      </form>
      <div className="signin">
        Already have an account? <a href="/">Login here</a>
      </div>
    </div>
  );
}

export default Register;
