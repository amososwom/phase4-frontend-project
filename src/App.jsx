import React, { useEffect, useState, createContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Register from "./components/Register";
import Account from "./components/Account";
import PropertyPosting from "./components/PropertyPosting";
import Market from "./components/Market";
import PropertyDetail from "./components/PropertyDetail";
import Favorites from "./components/Favorites";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import useFetch from "./components/UseFetch";

import "./App.css";


export const UserContext = createContext()

function App() {


  const { fetchData } = useFetch();

  const [loggedIn, setLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    const fetchInitialData = async () => {
      const { result, error } = await fetchData("https://api.huven.boogiecoin.com/auth", 'GET');
      if (error) {
        console.log("Error Confirming access_token");
      } else {
        if (result.valid) {
          setLoggedIn(true);
          setUserDetails(result.current_user)
          console.log("Successfully Confirmed access_token");
        } else {
          console.log("access_token Token Has Expired");
        }
      }
    };

    fetchInitialData();
  }, [fetchData]);

  return (
    <>
      <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <div className="maincontent">
          <UserContext.Provider value={userDetails}>
        <Routes>
          {loggedIn ? (
            <>

              <Route path="/account" element={<Account />} />
              <Route path="/post-property" element={<PropertyPosting />} />
              <Route path="/market" element={<Market />} />
              <Route path="/property/:id" element={<PropertyDetail />} />
              <Route path="/favorites" element={<Favorites />} />
            </>
          ) : (
            <>
              <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setUserDetails={setUserDetails}/>} />
              <Route path="/register" element={<Register />} />
            </>
          )}
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<LandingPage />} />
        </Routes>
            </UserContext.Provider>
      </div>
      <Footer />
    </>
  );
}

export default App;
