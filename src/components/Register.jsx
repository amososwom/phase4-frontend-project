import React from "react";
// import "./Form.css";

function Register() {
  return (
    <div className="form-container">
      <h2 className="title">Signup</h2>
      <form className="form">
        <div className="input-group">
          <label>
            <input type="text" className="input" required />
            <span>Username</span>
          </label>
        </div>
        <div className="input-group">
          <label>
            <input type="email" className="input" required />
            <span>Email</span>
          </label>
        </div>
        <div className="input-group">
          <label>
            <input type="password" className="input" required />
            <span>Password</span>
          </label>
        </div>
        <button type="submit" className="submit-button">
          Signup
        </button>
      </form>
      <div className="signin">
        Already have an account? <a href="/login">Login</a>
      </div>
    </div>
  );
}

export default Register;








