import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/components/header.scss";
import Navbar from "./Navbar";

const Header = () => {
  const [isActive, setActive] = useState(false);

  const showNav = () => {
    setActive(!isActive);
  };

  return (
    <header>
      <div className="container-1540">
        <Link to="/" className="logo">
          Antoine Petit
        </Link>

        <nav className={isActive ? "active" : ""}>
          <Navbar />
        </nav>

        <Menu onClick={showNav} id="burgermenu" />
      </div>
    </header>
  );
};

export default Header;
