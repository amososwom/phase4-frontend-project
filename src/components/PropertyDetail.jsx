import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../propertydetails.css";
import useFetch from './UseFetch';
import { UserContext } from '../App';

import Myreview from './Myreview';


function PropertyDetail() {
  
  const userDetails = useContext(UserContext)
  const navigate = useNavigate()

  const { id } = useParams();
  const [formData, setFormData] = useState({
    "comment": "",
    "property_id": id,
  })

  const [listed, setListed]  = React.useState(false)
  let goorange = listed ? {'background': 'rgba(226, 134, 48, 0.9)', 'border': 'none'} : []


  const {fetchData } = useFetch();

  const [propertyDetails, setPropertyDetails] = useState({})
  const [allReviews, setAllReviews] = useState([])
  
   let owner = userDetails['id'] == propertyDetails.user_id
   let gored = owner ? {'background': '#ac0303', 'border': 'none'} : []
  


   const fetchInitialData = async () => {
     const { result, error } = await fetchData(`https://api.huven.boogiecoin.com/properties/${id}`, 'GET');
     if (error) {
       alert("Error Grabing Properties Details");
       
     } else {
       setPropertyDetails(result)
       setAllReviews(result.reviews)
     }
   };

  useEffect(() => {
    fetchInitialData()
  }, [])

  useEffect(() => {
    if (propertyDetails['favorites']) {
        const userFavoriteExists = propertyDetails['favorites'].some(favorite => favorite.user_id === userDetails['id']);
        setListed(userFavoriteExists);

    }
  }, [propertyDetails]);

  function handleSubmit(e){
    e.preventDefault();
    
    const postReviews = async () => {
      const { result, error } = await fetchData("https://api.huven.boogiecoin.com/reviews", 'POST', true, formData);
      if (error) {
        alert("Error Posting Properties");
        
      } else {
        setAllReviews(prev => [...prev, result])
        formData.comment = ""
      }
    };
    
    postReviews();
  }
  
    function handleChanges(e) {
      let name = e.target.name;
      let value = e.target.value;
      
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }

    const buyPropertie = async () => {
      let values = {
        "user_id": userDetails['id'],
        "status": 0
      };
    
      // Prompt the user for their phone number
      let promptphone = prompt("Enter Your Phone Number..");
      if (promptphone == null || promptphone == "") {
        return; // Exit if the phone number is not provided
      }
    
      // First API call to handle the payment
      let { result: paymentResult, error: paymentError } = await fetchData(
        "https://api.seosblog.com",
        'POST',
        false,
        { phone: promptphone, amount: (propertyDetails.price).slice(0,-3) }
      );
    
      if (paymentResult && paymentResult.Status) {
        // Alert the user of successful payment
        alert(`You have successfully bought this property with the amount of ${propertyDetails.price}`);
    
        // Second API call to update the property status
        let { result: updateResult, error: updateError } = await fetchData(
          `https://api.huven.boogiecoin.com/properties/${id}`,
          'PATCH',
          true,
          values
        );
    
        if (updateError) {
          alert("Oops, an error occurred while updating the property status.");
          return;
        }
    
        // Redirect the user to their account page
        navigate(`/account`);
      } else  {
        alert("Payment Cancelled.");
      }
    };
    
      

    const handleFav = async () => {
      let values = {
        "property_id": id,
      }
      const { result, error } = await fetchData(`https://api.huven.boogiecoin.com/favorites`, 'POST', true, values);
      if (error) {
        
        alert("Opps an error occured will try to fix that");
        return
      }
      fetchInitialData()
      alert(`Successfully Added  to Your Favorites`)
    };
     
    const deleteFav = async () => {
      const { result, error } = await fetchData(`https://api.huven.boogiecoin.com/user/favorites/${id}`, 'DELETE', true, null);
      if (error) {
        alert("Opps an error occured will try to fix that");
        return
      }
      fetchInitialData()
      alert(`Successfully Deleted from Your Favorites`)
    };
    
    let myReviews = allReviews.map(areview => {
      return <Myreview key={areview.id} {...areview}/>
    })

  return (
    <div className="pd">
      <span className="pt">{propertyDetails.title}</span>
      <div className="pc">
        <div className="pdin">
         <div className="imgbox">
         <img src={propertyDetails.imageurl} alt={propertyDetails.title} />
         </div>
         <div className="pddes">
          <span className="pddestitle">{propertyDetails.title} <i>by: {propertyDetails.username}</i></span>
           <div className="pddessin">

            <div className="pdesdes">
              <span className="pddesst">Description:</span>
              <span className="pddescsin">
                <ul>
                  <li>
                  {propertyDetails.description}
                  </li>
                </ul>
              </span>
            </div>

            <ul>
            <li className=""> Location:  <i>{propertyDetails.location}</i></li>
            <li className="">Price: <i>$ {propertyDetails.price}</i></li>
            <li className="">Released: <i>{propertyDetails.created_at}</i></li>
            </ul>
           </div>
         </div>
         {/* <div className="payment">
          Hallo World
          </div> */}

        </div>
        <div className="pdactions">
          <button className="actionsbtn" style={gored}onClick={buyPropertie}>{owner ? 'Retrieve' : 'Buy'}</button>

          <button className="actionsbtn" style={goorange} onClick={ listed ? deleteFav : handleFav }>{listed ? 'Remove' : 'Add'} Favorites</button>
        </div>
      </div>
      <div className="pr">
        <div className="prall">
          <span className="prtitile">Recent-Reviews</span>
          <div className="prreviews">
            {myReviews}
          </div>
        </div>
        <form className="prform" onSubmit={handleSubmit}>

          <span>Leave a Review</span>
          <textarea placeholder="Your Review" name= "comment" value={formData.comment} onChange={(e) => handleChanges(e)}/>
          <button className="actionsbtn" type="submit">Submit Review</button>
        </form>
      </div>
    </div>
  );
}

export default PropertyDetail;