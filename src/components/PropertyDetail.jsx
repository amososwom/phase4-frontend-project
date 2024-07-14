import React from "react";
import { useParams } from "react-router-dom";

function PropertyDetail() {
  const { id } = useParams();

  return (
    <div>
      <h2>Property Detail - {id}</h2>
      {/* Implement the logic to display property details and reviews */}
      <div className="form-container">
        <h3 className="title">Leave a Review</h3>
        <form className="form">
          <div className="input-group">
            <label>
              <textarea className="input" required></textarea>
              <span>Review</span>
            </label>
          </div>
          <button type="submit" className="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default PropertyDetail;