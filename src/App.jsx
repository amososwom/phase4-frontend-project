import React from "react";
import { Routes, Route } from "react-router-dom";
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
import "./App.css";


function App() {
  return (
    <>
      <NavBar />
      <div className="maincontent">
      <Routes>
        <Route  path="/" element={<LandingPage />} />
        <Route  path="/login" element={<Login />} />
        <Route  path="/register" element={<Register />} />
        <Route  path="/account" element={<Account/>} />
        <Route  path="/post-property" element={<PropertyPosting />} />
        <Route  path="/market" element={<Market />} />
        <Route  path="/property/:id" element={<PropertyDetail />} />
        <Route  path="/favorites" element={<Favorites />} />
      </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;

























