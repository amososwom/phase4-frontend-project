import React from 'react'
import { Navigate, useNavigate } from "react-router-dom";


function SingleProperty({id, title, description, imageurl, 
    price, location, created_at, user_id, reviews}) {
        
        let propertyRoute = useNavigate()
        function handleNavigate(){
        propertyRoute(`/property/${id}`)
        }

  return (
    <div className="property" onClick={handleNavigate}>
    <img src={imageurl} alt={title} />
    <span className="title">{title}</span>

      <span className="des">
        {description}
      </span>
      <span className="pricedes">
        $ {price}
      </span>
      <span className="publish">
        Published: <i>{created_at}</i>
      </span>
  </div>
  )
}

export default SingleProperty


