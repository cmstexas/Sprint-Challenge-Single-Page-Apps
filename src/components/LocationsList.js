import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import LocationCard from './LocationCard';



export default function LocationList () {  
  // TODO: Add useState to track data from useEffect
  const [location, setLocation] = useState();


  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getLocation = () => {
      axios 
      .get('https://rickandmortyapi.com/api/location/')
    //   https://rickandmortyapi.com/api/location/
      .then(response => {
        setLocation(response.data.results);
      })
      .catch(error => {
        console.error('This is a Server Error', error);
      })
    }

  }, [])

  return <section className='location-list grid-view'>

  {location.map((loc, index) => (
    <LocationCard key={loc.id} character={`Location/${loc.id}`} />
))}

</section>

}
