// import React from "react";
// import { useParams } from "react-router-dom";

// function PropertyDetail() {
//   const { id } = useParams();

//   return (
//     <div>
//       <h2>Property Detail - {id}</h2>
//       {/* Implement the logic to display property details and reviews */}
//       <div className="form-container">
//         <h3 className="title">Leave a Review</h3>
//         <form className="form">
//           <div className="input-group">
//             <label>
//               <textarea className="input" required></textarea>
//               <span>Review</span>
//             </label>
//           </div>
//           <button type="submit" className="submit">
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default PropertyDetail;








import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "./UseFetch"; // Update with correct path to useFetch hook

const PropertyDetail = () => {
  const { id } = useParams();
  const { data: property, loading, error, fetchData } = useFetch();
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ rating: "", comment: "" });

  useEffect(() => {
    const fetchProperty = async () => {
      await fetchData(`http://localhost:5000/properties/${id}`);
    };
    fetchProperty();
  }, [fetchData, id]);

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await fetch(
        `http://localhost:5000/properties/${id}/reviews`
      );
      const data = await response.json();
      setReviews(data);
    };
    fetchReviews();
  }, [id]);

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
      setReviews([...reviews, review]);
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
      <h2>{property.title}</h2>
      <p>{property.description}</p>
      <p>${property.price}</p>
      <p>{property.location}</p>
      <img
        src={property.imageurl || "https://via.placeholder.com/150"}
        alt={property.title}
      />

      <h3>Reviews</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>Rating: {review.rating}</p>
            <p>Comment: {review.comment}</p>
          </li>
        ))}
      </ul>

      <h3>Leave a Review</h3>
      <form onSubmit={handleReviewSubmit}>
        <label>
          Rating:
          <input
            type="number"
            name="rating"
            value={newReview.rating}
            onChange={handleReviewChange}
            min="1"
            max="5"
            required
          />
        </label>
        <label>
          Comment:
          <textarea
            name="comment"
            value={newReview.comment}
            onChange={handleReviewChange}
          />
        </label>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default PropertyDetail;
