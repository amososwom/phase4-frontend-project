











import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import PropertyDetail from "./components/PropertyDetail";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import PropertyList from "./components/PropertyList";
import "./NavBar.css";
import "./Footer.css";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <div className="main-content">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/propertydetail" element={<PropertyDetail />} />
          <Route exact path="/user-profile" element={<UserProfile />} />
          <Route exact path="/property-list" element={<PropertyList />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;