import React from "react";
import { Link } from "react-router-dom";

function Market() {
  return (
    <div>
      <h2>Market</h2>
      {/* where the Implementation of  the logic to display all properties ,inafaa kua */}
      <div>
        <Link to={`/property/1`}>Property 1</Link>
      </div>
      {/* Adding the more property links */}
    </div>
  );
}

export default Market;