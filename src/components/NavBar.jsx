import {NavLink} from 'react-router-dom'

function NavBar() {
  return (
    <nav className="navbar">
      <div>
        NavBar
        <NavLink to="/">Login</NavLink>
        <NavLink to="/Register">Register</NavLink>
        <NavLink to="/PropertyDetail">PropertyDetail</NavLink>
        <NavLink to="/UserProfile">UserProfile</NavLink>
        <NavLink to="/PropertyList">PropertyList</NavLink>
   
      </div>
    </nav>
  );
}

export default NavBar
