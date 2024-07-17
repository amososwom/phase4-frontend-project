import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import useFetch from "./UseFetch";
import "./favourites.css";



function Favorites() {
  const [properties, setProperties] = useState([]);
  const {fetchData } = useFetch();
  let navigate = useNavigate()
  


  
  useEffect(() => {
    const fetchUserProperties = async () => {
      const token = localStorage.getItem("access_token");
      if (token) {
        const { result, error } = await fetchData("http://localhost:5000/user/favorites", "GET", true, null);
        if (result) {
          setProperties(result);
        } else {
          alert("Error fetching all Favorites:", error);
        }
      }
    };
    fetchUserProperties();
  }, []);

  const moreDetails = (id) => {
    navigate(`/property/${id}`)
  };

  return (
    <div className="accountps accountp" >
    <span>Current-Propertys</span>

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
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {properties && properties.length > 0 ? (
          properties.map((property) => (
            <tr key={property.property_id}>
              <td>{property.property_id}</td>
              <td>
                <img src={property.imageurl} alt={property.title} style={{ width: '100px', height: '100px' }} />
              </td>
              <td>{property.title}</td>
              <td>{property.description}</td>
              <td>{property.location}</td>
              <td>${property.price}</td>
              <td>
              <button type="button" onClick={() => moreDetails(property.property_id)}>
                        more
                      </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="7">You have no favorites.</td>
          </tr>
        )}
      </tbody>
    </table>
      </div>
  </div>
  );
}

export default Favorites;
