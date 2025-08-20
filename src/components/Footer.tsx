import { FolderCode, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/components/footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container-1540">
        <div>
          <Link to="./" className="logo">
            Antoine Petit
          </Link>
          <div id="socials">
            <Link
              to="https://www.linkedin.com/in/antoine-petit-323587347/"
              target="_blank"
            >
              <Linkedin size={20}/>
            </Link>
            <Link to="https://github.com/AntooinePetit" target="_blank">
              <Github size={20}/>
            </Link>
            <Link
              to="https://www.frontendmentor.io/profile/AntooinePetit"
              target="_blank"
            >
              <FolderCode size={20}/>
            </Link>
          </div>
        </div>
        <div>
          <p>Développeur Web Front-End & Designer UI/UX</p>
          <p>© 2025 Antoine Petit. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
