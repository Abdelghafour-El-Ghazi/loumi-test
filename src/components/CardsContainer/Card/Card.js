import React from "react";
import "../../../Card.css";
import Person from "./Person";
const Card = ({ people, visite, garants, candidats }) => {
  return (
    <div className='card'>
      <div className='header'>
        <div>Colocation 2 pers.</div>
      </div>
      <div className='people'>
        {people.map((person) => (
          <Person img={person.img} name={person.name} pro={person.pro} />
        ))}
      </div>
      <div>
        <div className='middle-header'>Revenu mensuel moyen</div>
      </div>
      <div className='money'>
        <div>
          <div>Candidats</div>
          <div className='amount'>{candidats}</div>
        </div>
        <div>
          <div>Garants</div>
          <div className='amount'>{garants}</div>
        </div>
      </div>
      <a href='/'>Voir plus</a>
      <div className='rendez'>Visite du {visite}</div>
    </div>
  );
};

export default Card;
