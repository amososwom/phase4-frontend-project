
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
            <div key={property.id} className="property-item">
              <Link to={`/property-detail/${property.id}`}>
                <h3>{property.title}</h3>
                <p>{property.description}</p>
                <p>${property.price}</p>
                <p>{property.location}</p>
                {/* If you have an image URL, you can include an img tag here */}
                <img
                  src={property.imageurl || "https://via.placeholder.com/150"}
                  alt={property.title}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </Link>
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
