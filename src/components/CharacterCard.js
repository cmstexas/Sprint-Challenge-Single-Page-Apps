import React from 'react'

export default function CharacterCard ({  name, status, species, type, gender, origin, location }) {
  // export default function LocationCard ({ name, type, dimension, residents }) {

  return (
    <div>
      <span>`${name}`</span>
      <span>`${status}`</span>
      <span>`${species}`</span>
      <span>`${type}`</span>
      <span>`${gender}`</span>
      <span>`${origin}`</span>
      <span>`${location}`</span>
    </div>
  )};
  







// export default function CharacterCard = props => {
//   return (<span>`${props.Character}`</span>
// };
