// import {NavLink} from 'react-router-dom'

// function NavBar() {
//   return (
//     <nav className="navbar">
//       <div>
//         NavBar
//         <NavLink to="/">Login</NavLink>
//         <NavLink to="/Register">Register</NavLink>
//         <NavLink to="/PropertyDetail">PropertyDetail</NavLink>
//         <NavLink to="/UserProfile">UserProfile</NavLink>
//         <NavLink to="/PropertyList">PropertyList</NavLink>
   
//       </div>
//     </nav>
//   );
// }

// export default NavBar





import { NavLink } from "react-router-dom";


function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">RealEstateApp</div>
        <div className="navbar-links">
          <NavLink exact to="/" activeClassName="active" className="nav-link">
            Login
          </NavLink>
          <NavLink to="/register" activeClassName="active" className="nav-link">
            Register
          </NavLink>
          <NavLink
            to="/propertydetail"
            activeClassName="active"
            className="nav-link"
          >
            Property Detail
          </NavLink>
          <NavLink
            to="/userprofile"
            activeClassName="active"
            className="nav-link"
          >
            User Profile
          </NavLink>
          <NavLink
            to="/propertylist"
            activeClassName="active"
            className="nav-link"
          >
            Property List
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;