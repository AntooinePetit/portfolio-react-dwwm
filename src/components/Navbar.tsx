import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="navbar">
      <Link to="/">Accueil</Link>
      <Link to="/about">À propos</Link>
      <Link to="/projets">Projets</Link>
      <Link to="/contact">Contact</Link>
    </ul>
  );
};

export default Navbar;
