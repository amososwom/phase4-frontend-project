import { NavLink, useNavigate } from "react-router-dom";
import "../NavBar.css";

function NavBar({ loggedIn, setLoggedIn }) {
  let directaccount = useNavigate()

  function handlelogout(e){
    e.preventDefault();
    localStorage.removeItem('access_token');
    setLoggedIn(false)
    directaccount('/')
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Haven-Hunter🌆</div>
        <div className="navbar-links">
        <NavLink to="/" className="nav-link">
                Home
              </NavLink>

          {loggedIn ? (
            <>

              <NavLink to="/account" className="nav-link">
                Account
              </NavLink>
              <NavLink to="/post-property" className="nav-link">
                Post Property
              </NavLink>
              <NavLink to="/market" className="nav-link">
                Market
              </NavLink>
              <NavLink to="/favorites" className="nav-link">
                Favorites
              </NavLink>
              <NavLink to="/log" className="nav-link" onClick={(e) => handlelogout(e)}>
                Logout
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/login" className="nav-link">
                Login
              </NavLink>
              <NavLink to="/register" className="nav-link">
                Signup
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;












