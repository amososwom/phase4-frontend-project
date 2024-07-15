import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../market.css";
import useFetch from "./UseFetch"; // Update with correct path to useFetch hook

const Market = () => {
  const { data: properties, loading, error, fetchData } = useFetch();

  useEffect(() => {
    const fetchProperties = async () => {
      await fetchData("http://localhost:5000/properties");
    };
    fetchProperties();
  }, [fetchData]);

  const addToFavorites = async (propertyId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/properties/${propertyId}/favorites`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      if (response.ok) {
        // Handle success, e.g., show a message or update UI
        console.log("Property added to favorites!");
      } else {
        // Handle error response
        console.error("Failed to add property to favorites");
      }
    } catch (error) {
      console.error("Error adding property to favorites:", error);
    }
  };

  if (loading) {
    return <p>Loading properties...</p>;
  }

  if (error) {
    return <p>Error fetching properties: {error.message}</p>;
  }

  return (
    <div>
      <h2>Market Properties</h2>
      <div className="property-list">
        {properties && properties.length > 0 ? (
          properties.map((property) => (
            <div key={property.id} className="property-card">
              <Link to={`/property-detail/${property.id}`}>
                <div className="property-image-container">
                  <img
                    src={property.imageurl || "https://via.placeholder.com/150"}
                    alt={property.title}
                    className="property-image"
                  />
                </div>
                <div className="property-details">
                  <h3>{property.title}</h3>
                  <p>{property.description}</p>
                  <p>${property.price}</p>
                  <p>{property.location}</p>
                </div>
              </Link>
              <button
                onClick={() => addToFavorites(property.id)}
                className="add-to-favorites"
              >
                Add to Favorites
              </button>
            </div>
          ))
        ) : (
          <p>No properties available.</p>
        )}
      </div>
    </div>
  );
};

export default Market;
