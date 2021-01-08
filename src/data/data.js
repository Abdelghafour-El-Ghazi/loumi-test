import me from "../images/pp.jpg";
import buffon from "../images/buffon.jpg";
import cris from "../images/cris.jpg";
import drogba from "../images/drogba.jpg";
import federer from "../images/federer.jpg";
import hakimi from "../images/hakimi.jpg";
import iker from "../images/iker.jpg";
import karim from "../images/karim.jpg";
import lebron from "../images/lebron.jpg";
import ramos from "../images/ramos.jpg";
import serena from "../images/serena.jpg";
import sharapova from "../images/sharapova.jpg";

const arr1 = [
  {
    candidats: "5206€",
    garants: "6700€",
    person: [
      { img: cris, name: "Cristiano Ronaldo", pro: "Football" },
      {
        img: serena,
        name: "Serena Williams",
        pro: "Tennis",
      },
    ],
    visite: "19 Janvier à 11h55",
  },

  {
    candidats: "6500€",
    garants: "8700€",
    person: [
      { img: ramos, name: "Sergio Ramos", pro: "Football" },
      {
        img: sharapova,
        name: "Maria Sharapova",
        pro: "Tennis",
      },
    ],
    visite: "23 Septembre à 10h30",
  },
  {
    candidats: "3700€",
    garants: "6900€",
    person: [
      { img: drogba, name: "Didier Drogba", pro: "Football" },
      {
        img: hakimi,
        name: "Achraf Hakimi",
        pro: "Football",
      },
    ],
    visite: "22 Juin à 10h50",
  },
];
const arr2 = [
  {
    candidats: "2300€",
    garants: "7500€",
    person: [
      { img: karim, name: "Karim Benzema", pro: "Football" },
      {
        img: me,
        name: "Abdelghafour EL GHAZI",
        pro: "Intern",
      },
    ],
    visite: "10 Avril à 12h30",
  },

  {
    candidats: "2200€",
    garants: "4900€",
    person: [
      { img: iker, name: "Iker Casillas", pro: "Football" },
      {
        img: lebron,
        name: "LeBron James",
        pro: "Basketball",
      },
    ],
    visite: "3 Mai à 13h30",
  },
  {
    candidats: "6100€",
    garants: "9700€",
    person: [
      { img: federer, name: "Roger Federer", pro: "Tennis" },
      {
        img: buffon,
        name: "Gianluigi Buffon",
        pro: "Football",
      },
    ],
    visite: "13 Mars à 10h30",
  },
];

export const arr = [arr1, arr2];
