import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Character () {
  const [location, setLocation] = useState();

 useEffect(() => {
  //  const id = props.match.params.id;
  
   // change ^^^ that line and grab the id from the URL
   // You will NEED to add a dependency array to this effect hook

      axios
       .get(`https://rickandmortyapi.com/api/location/${id}`)
    //    https://rickandmortyapi.com/documentation/#get-all-characters
       .then(response => {
        setLocation(response.data.response);
      })
       .catch(error => {
         console.error(error);
       });

 },[]);}
