import React from "react";

function PropertyPosting() {
  return (
    <div className="form-container">
      <h2 className="title">Post a Property</h2>
      <form className="form">
        <div className="input-group">
          <label>
            <input type="text" className="input" required />
            <span>Title</span>
          </label>
        </div>
        <div className="input-group">
          <label>
            <textarea className="input" required></textarea>
            <span>Description</span>
          </label>
        </div>
        <div className="input-group">
          <label>
            <input type="text" className="input" required />
            <span>Location</span>
          </label>
        </div>
        <div className="input-group">
          <label>
            <input type="number" className="input" required />
            <span>Price</span>
          </label>
        </div>
        <div className="input-group">
          <label>
            <input type="text" className="input" required />
            <span>Image URL</span>
          </label>
        </div>
        <button type="submit" className="submit-button">
          Post Property
        </button>
      </form>
    </div>
  );
}

export default PropertyPosting;
