import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CharacterList from './components/CharacterList';
import Character from './components/Character';
import LocationList from './components/LocationsList';
import Location from './components/Location';
import TabNav from './components/TabNav.js';
import Header from './components/Header.js';
import AppRouter from './components/AppRouter.js';
// import styled from 'styled-components';


const App = () => {
  const [character, setCharacter] = useState();

  return (
    <Router>
  <main>
    <Header />
    <TabNav />
    <AppRouter />
    <Route path='/' exact component={CharacterList} />
    <Route path='/Character:id' component ={Character} />
    <Route path='/' exact component={LocationList} />
    <Route path='/Location:id' component ={Location} />
  </main>
  </Router>
  )};

export default App;



// const App = () => {
//   const [savedList, setSavedList] = useState( [] );
 
//   // const addToSavedList = movie => {
//     // setSavedList( [...savedList, movie] );
//   // };
 
//   return (
//   <Router>
//     <div>
//       <SavedList list={savedList} />
//         <Route path='/' exact component={MovieList} />
//         {/* <Route path='/movies/:id' render={props => <Movie {...props} addToSavedList = {addToSavedList} />} /> */}
//         <Route path='/movies/:id' component ={Movie} />
//     </div>
//   </Router>
//   );
//  };
 
//  export default App;
 