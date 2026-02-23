import React from 'react'

const Card = (props) => {

  console.log(props);
  return (
    <div className="card">
      <img src={props.img} alt='profile'>
      </img>
      <h1>{props.user},{props.age}</h1>
      <p>{props.profession}</p>
      <button>View Profile</button>
    </div>
  )
}

export default Card