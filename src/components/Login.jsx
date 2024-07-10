import React from "react";
// import "./Form.css";

function Login() {
  return (
    <div className="form-container">
      <h2 className="title">Login</h2>
      <form className="form">
        <div className="input-group">
          <label>
            <input type="text" className="input" required />
            <span>Username</span>
          </label>
        </div>
        <div className="input-group">
          <label>
            <input type="password" className="input" required />
            <span>Password</span>
          </label>
        </div>
        <button type="submit" className="submit">
          Login
        </button>
      </form>
      <div className="signin">
        Don't have an account? <a href="/register">Sign up</a>
      </div>
    </div>
  );
}

export default Login;