import "../styles/navigation.css";
import { NavLink } from "react-router-dom";
import img1 from "../images/thomas.jpg";
import img2 from "../images/thomas1.jpg";
import img3 from "../images/thomas3.jpg";
import img4 from "../images/thomas4.jpg";
import img5 from "../images/thomas5.jpg";

const character = [
  { name: "Thomas Shelby", path: "/thomas_shelby", exact: true, url: img1 },
  { name: "Grace Shelby", path: "/grace_shelby", url: img2 },
  { name: "Arthur Shelby", path: "/arthur_shelby", url: img3 },
  { name: "Alfie Solomon ", path: "/alfie_solomon", url: img4 },
  { name: "Polly Shelby", path: "/polly_shelby", url: img5 },
];

const Navigation = () => {
  const characterList = character.map((person) => {
    return (
      <div className="character">
        <NavLink to={person.path} exact={person.exact ? person.exact : false}>
          <img src={person.url} alt={person.name} />
        </NavLink>
      </div>
    );
  });
  return (
    <>
      <div className="character_wrapper">{characterList}</div>
    </>
  );
};

export default Navigation;
