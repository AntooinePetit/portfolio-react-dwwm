import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <ul className="navbar">
      <Link to="/">{t("navbar.home")} </Link>
      <Link to="/about">{t("navbar.about")}</Link>
      <Link to="/projets">{t("navbar.projects")}</Link>
      <Link to="/contact">{t("navbar.contact")}</Link>
    </ul>
  );
};

export default Navbar;
