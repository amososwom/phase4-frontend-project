// import React from "react";

// function Favorites() {
//   return (
//     <div>
//       <h2>Favorites</h2>
//       {/* Implementing  the logic to display favorite properties here */}
//     </div>
//   );
// }

// export default Favorites;








import React, { useEffect, useState } from "react";

function Favorites() {
  const [favoriteProperties, setFavoriteProperties] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await fetch("http://localhost:5000/favorites", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        });
        if (response.ok) {
          const favorites = await response.json();
          setFavoriteProperties(favorites);
        } else {
          console.error("Failed to fetch favorites");
        }
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };
    fetchFavorites();
  }, []);

  return (
    <div>
      <h2>Favorites</h2>
      <div className="favorite-properties">
        {favoriteProperties.map((property) => (
          <div key={property.id} className="favorite-property">
            <h3>{property.title}</h3>
            <p>{property.description}</p>
            <p>${property.price}</p>
            <p>{property.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
