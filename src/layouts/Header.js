import { NavLink } from "react-router-dom";
import "../styles/header.css";
import logo from "../images/peaky.png";

const header = [
  { name: "Home", path: "/", exact: true },
  { name: "About", path: "/about" },
  { name: "History", path: "/history" },
  { name: "Quote", path: "/quote" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const menu = header.map((list) => (
    <li key={list.name}>
      <NavLink to={list.path} exact={list.exact ? list.exact : false}>
        {list.name}
      </NavLink>
    </li>
  ));
  return (
    <>
      <div className="navBar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav className="main">
          <ul>{menu}</ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
