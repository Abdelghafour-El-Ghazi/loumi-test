import React from "react";
import Card from "./Card";

const CardsContainer = ({ arrPerson }) => {
  return (
    <div className='container'>
      {arrPerson.map((el) => (
        <Card
          candidats={el.candidats}
          garants={el.garants}
          visite={el.visite}
          people={el.person}
        />
      ))}
    </div>
  );
};

export default CardsContainer;
