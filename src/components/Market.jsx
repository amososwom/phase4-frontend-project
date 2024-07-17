import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleProperty from './SingleProperty'
import "../market.css";
import useFetch from "./UseFetch";


function Market() {

  const { data, loading, error, fetchData } = useFetch();

  const [allProperty, setProperty] = useState([])

  useEffect(() => {
    const fetchInitialData = async () => {
      const { result, error } = await fetchData("http://localhost:5000/properties", 'GET');
      if (error) {
        console.log("Error Grabing Properties");
        
      } else {
        setProperty(result)
      }
    };

    fetchInitialData();
  }, [fetchData])


  let displayedProperty = allProperty.map(property => <SingleProperty key={property.id} {...property} /> )

  return (
    <div className="market">
      <span className="titleh2">Market Place</span> 

      <div className="allmarket">
    {displayedProperty}
      </div>
    </div>
  );
}

export default Market;

