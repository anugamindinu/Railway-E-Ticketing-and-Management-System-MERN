import React from "react";

function MenuItem({ image, name, price,description }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <br></br>
      <h1> {name} </h1>
      <br></br>
      <p>{description}</p>
      <br></br>
      <p> Rs.{price} </p>
      
    </div>
  );
}

export default MenuItem;
