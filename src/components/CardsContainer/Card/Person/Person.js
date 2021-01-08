import React from "react";

const Person = ({ name, pro, img }) => {
  return (
    <div className='person'>
      <img src={img} alt={name} />
      <div>
        <div style={{ marginBottom: "2px" }}>{name}</div>
        <div className='pro'>{pro}</div>
      </div>
    </div>
  );
};

export default Person;
