// import React from 'react'

// function Login() {
//   return (
//     <div>
//       Login
//     </div>
//   )
// }

// export default Login










// import React from "react";


// function Login() {
//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form>
//         <div className="form-group">
//           <label>Email:</label>
//           <input type="email" required />
//         </div>
//         <div className="form-group">
//           <label>Password:</label>
//           <input type="password" required />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;


import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="form-container">
      <div className="title">Login</div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;