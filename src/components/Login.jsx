// import React from "react";


// function Login() {
//   return (
//     <div className="form-container">
//       <h2 className="title">Login</h2>
//       <form className="form">
//         <div className="input-group">
//           <label>
//             <input type="text" className="input" required />
//             <span>Username</span>
//           </label>
//         </div>
//         <div className="input-group">
//           <label>
//             <input type="password" className="input" required />
//             <span>Password</span>
//           </label>
//         </div>
//         <button type="submit" className="submit">
//           Login
//         </button>
//       </form>
//       <div className="signin">
//         Don't have an account? <a href="/register">Sign up</a>
//       </div>
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
      <div className="signin">
         Don't have an account? <a href="/register">Sign up</a>
        {" "}
      </div>
    </div>
  );
}

export default Login;








