import React, { useEffect, useState, useContext } from "react";
import useFetch from "./UseFetch";
import { UserContext} from "../App";
import Usericon from '/user2.png';

import "./Account.css";
function Account() {
  const [properties, setProperties] = useState([]);
  const {fetchData } = useFetch();
  const userDetails = useContext(UserContext)
  console.log(userDetails)

  
  useEffect(() => {
    const fetchUserProperties = async () => {
      const token = localStorage.getItem("access_token");
      if (token) {
        const { result, error } = await fetchData("http://localhost:5000/user/properties", "GET", true, null);
        if (result) {
          setProperties(result);
        } else {
          console.error("Error fetching user properties:", error);
        }
      }
    };
    fetchUserProperties();
  }, [fetchData]);

  const updatePropertyStatus = async (id) => {
    const token = localStorage.getItem("access_token");
  
    try {
      const response = await fetch(`http://localhost:5000/properties/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ status: '1' }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        alert("Oops we had an issue releasing your property. Please try again later.");
        return;
      }

      const newPropertis = properties.filter(value => value.id !== id)
      setProperties(newPropertis)
  
    } catch (error) {
      console.error("Error updating property status:", error);
      alert("An unexpected error occurred. Please try again later.");
    }
  };

  
  return (
    <div className="account">
      <span className="welcome">Welcome, <i>{userDetails['username']}</i></span>
      <div className="accountd">
       <div className="accountdimg">
       <img src={Usericon} alt="" /> 
       <span>{userDetails['username']}</span>
       </div>
       <div className="accountdmore">
        <ul>
          <li>Username: <i>{userDetails['username']}</i></li>
          <li>Email: <i>{userDetails['email']}</i></li>
          <li>Joined: <i>{userDetails['created_at']}</i></li>
        </ul>
       </div>

       </div>

      <div className="accountp">
        <span>Current-Properties</span>

      <div className="table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Title</th>
              <th>Description</th>
              <th>Location</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {properties && properties.length > 0 ? (
              properties.map((property) => (
                <tr key={property.id}>
                  <td>{property.id}</td>
                  <td>
                    <img src={property.imageurl} alt={property.title} style={{ width: '100px', height: '100px' }} />
                  </td>
                  <td>{property.title}</td>
                  <td>{property.description}</td>
                  <td>{property.location}</td>
                  <td>${property.price}</td>
                  <td>
                      <button type="button" onClick={() => updatePropertyStatus(property.id)}>
                        Sell
                      </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">No properties found.</td>
              </tr>
            )}
          </tbody>
        </table>
          </div>
      </div>
    </div>
  );
}

export default Account;