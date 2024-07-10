import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Register from "./components/Register";
import UserProfile from "./components/UserProfile";
import PropertyPosting from "./components/PropertyPosting";
import Market from "./components/Market";
import PropertyDetail from "./components/PropertyDetail";
import Favorites from "./components/Favorites";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./App.css";
import "./NavBar.css";
import "./Footer.css";
import "./LandingPage.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/profile" element={<UserProfile />} />
        <Route exact path="/post-property" element={<PropertyPosting />} />
        <Route exact path="/market" element={<Market />} />
        <Route exact path="/property/:id" element={<PropertyDetail />} />
        <Route exact path="/favorites" element={<Favorites />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;




































