import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "./UseFetch"; // Ensure the path is correct
import "../PropertyDetail.css"; // Import the CSS file

const PropertyDetail = () => {
  const { id } = useParams();
  const { data: propertyData, loading, error, fetchData } = useFetch();
  const [property, setProperty] = useState(null);
  const [newReview, setNewReview] = useState({ rating: "", comment: "" });

  useEffect(() => {
    const fetchProperty = async () => {
      const { result } = await fetchData(
        `http://localhost:5000/properties/${id}`
      );
      if (result) {
        setProperty(result);
      }
    };
    fetchProperty();
  }, [fetchData, id]);

  const handleReviewChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `http://localhost:5000/properties/${id}/reviews`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        body: JSON.stringify(newReview),
      }
    );
    if (response.ok) {
      const review = await response.json();
      setProperty({
        ...property,
        reviews: [...property.reviews, review],
      });
      setNewReview({ rating: "", comment: "" });
    }
  };

  if (loading) {
    return <p>Loading property...</p>;
  }

  if (error) {
    return <p>Error fetching property: {error.message}</p>;
  }

  return (
    <div>
      {property ? (
        <>
          <h2>{property.title}</h2>
          <p>{property.description}</p>
          <p>${property.price}</p>
          <p>{property.location}</p>
          <img
            src={property.imageurl || "https://via.placeholder.com/150"}
            alt={property.title}
          />

          {/* <h3>Reviews</h3> */}
          <div className="reviews">
            {property.reviews.map((review) => (
              <div key={review.id} className="card">
                <div className="stars">
                  {[...Array(review.rating)].map((star, index) => (
                    <span key={index} className="star">
                      ★
                    </span>
                  ))}
                </div>
                <div className="infos">
                  <p className="description">{review.comment}</p>
                  <p className="author">by {review.user_name}</p>
                  <p className="date-time">
                    {new Date(review.created_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <h3>Leave a Review</h3>
          <div className="form-container">
            <h3 className="title">Leave a Review</h3>
            <form onSubmit={handleReviewSubmit} className="form">
              <div className="input-group">
                <label>Rate:</label>
                <input
                  type="number"
                  name="rating"
                  value={newReview.rating}
                  onChange={handleReviewChange}
                  min="1"
                  max="5"
                  required
                />
              </div>
              <div className="input-group">
                <label>Comment:</label>
                <textarea
                  name="comment"
                  value={newReview.comment}
                  onChange={handleReviewChange}
                  required
                />
              </div>
              <button type="submit" className="sign">
                Submit Review
              </button>
            </form>
          </div>
        </>
      ) : (
        <p>No property details available.</p>
      )}
    </div>
  );
};

export default PropertyDetail;













