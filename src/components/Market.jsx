// import React from "react";


// function PropertyList() {
//   return (
//     <div className="property-list-container">
//       <h2>Property List</h2>
//       <p>List of properties will be displayed here.</p>
//     </div>
//   );
// }

// export default PropertyList;







import React from "react";
import { Link } from "react-router-dom";

function Market() {
  return (
    <div>
      <h2>Market</h2>
      {/* Implement the logic to display all properties here */}
      <div>
        <Link to={`/property/1`}>Property 1</Link>
      </div>
      {/* Add more property links */}
    </div>
  );
}

export default Market;