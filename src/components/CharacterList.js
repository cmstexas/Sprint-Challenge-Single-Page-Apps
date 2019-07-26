import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import CharacterCard from "./components/CharacterCard";


export default function CharachterList() {  
  const [character, setCharacter] = useState();


  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getCharacters = () => {
      axios 
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        setCharacter(response.data.results);
      })
      .catch(error => {
        console.error('This is a Server Error', error);
      })
    }

  }, [])

  return <section className='character-list grid-view'>

      {character.map((chars, index) => (
        <CharacterCard key={chars.id} character={`Character/${chars.id}`} />
    ))}

    </section>
}