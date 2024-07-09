// import React from "react"
import Login from "./components/Login"
import Register from "./components/Register"
import PropertyDetail from "./components/PropertyDetail"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import UserProfile from "./components/UserProfile"
import PropertyList from "./components/PropertyList.jsx"
import {Routes,Route} from "react-router-dom"
import "./Footer.css";
// import SearchBar from "./components/SearchBar"
// import MyProperties from "./components/MyProperties"


function App() {

  return (
    <>
      <div>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          {/* <Route exact path="/property/:id" element={<PropertyDetail />} /> */}
          <Route exact path="/propertydetail" element={<PropertyDetail />} />
          {/* <Route exact path="/user/:id" element={<UserProfile />} /> */}
          <Route exact path="/user-profile" element={<UserProfile />} />
          <Route exact path="/property-list" element={<PropertyList />} />

          {/* <Route exact path="/properties" element={<PropertyList />} /> */}
          {/* <Route exact path="/search" element={<SearchBar />} />
        <Route exact path="/myproperties" element={<MyProperties />} /> */}
        </Routes>

        {/* <h1>Home</h1> */}

        <NavBar />
        {/* <Login /> */}
        {/* <Register /> */}
        {/* <UserProfile /> */}
        {/* <PropertyList /> */}
        <PropertyDetail />
        <Footer />
      </div>
    </>
  );
}

export default App


