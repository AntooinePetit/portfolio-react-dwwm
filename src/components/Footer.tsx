import { SiGithub } from "@icons-pack/react-simple-icons";
import { FolderCode, Linkedin } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "../styles/components/footer.scss";

const Footer = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <footer>
      <div className="container-1540">
        <div>
          <Link to="/" className="logo">
            Antoine Petit
          </Link>
          <div id="socials">
            <Link
              to="https://www.linkedin.com/in/antoine-petit-323587347/"
              target="_blank"
            >
              <Linkedin size={20} />
            </Link>
            <Link to="https://github.com/AntooinePetit" target="_blank">
              <SiGithub size={20} />
            </Link>
            <Link
              to="https://www.frontendmentor.io/profile/AntooinePetit"
              target="_blank"
            >
              <FolderCode size={20} />
            </Link>
          </div>
        </div>
        <div>
          <p>{t("global.jobDescription")} </p>
          <p>© 2025 Antoine Petit. {t("global.rights")}.</p>
          <div>
            <button onClick={() => changeLanguage("fr")}>
              <ReactCountryFlag
                countryCode="FR"
                svg
                style={{
                  width: "30px",
                  height: "30px",
                }}
              />
            </button>
            <button onClick={() => changeLanguage("en")}>
              <ReactCountryFlag
                countryCode="GB"
                svg
                style={{
                  width: "30px",
                  height: "30px",
                }}
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
