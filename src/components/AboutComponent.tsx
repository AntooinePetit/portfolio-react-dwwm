import {
  SiCss,
  SiHtml5,
  SiJavascript,
  SiReact,
} from "@icons-pack/react-simple-icons";
import { ArrowRight, Circle } from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/components/AboutComponent.scss";

interface AboutComponentProps {
  page: string;
}

const AboutComponent = ({ page }: AboutComponentProps) => {
  return (
    <section id="about" className="container-1540">
      {page === "home" ? <h2>À propos de moi</h2> : <h1>À propos de moi</h1>}
      <div>
        <article>
          {page === "home" ? (
            <h3>Mon parcous</h3>
          ) : (
            <h2>Mon parcous</h2>
          )}
          <p>
            Étudiant en développement web et web mobile, je construis
            progressivement mon expertise en combinant rigueur technique et
            curiosité active. Après deux premières périodes de formation en 2016
            et 2019, j’ai repris le chemin du code avec une réelle volonté de
            professionnalisation.
          </p>
          <p>
            Je me forme en profondeur aux langages fondamentaux du web : HTML,
            CSS et JavaScript. Actuellement, je m’intéresse aux animations web,
            que j’explore comme un moyen d’apporter du dynamisme aux interfaces
            tout en préservant la performance.
          </p>
          <p>
            Orienté code avant tout, je cherche à développer des interfaces
            propres, maintenables et accessibles, avec un vrai souci de
            structure et de clarté. Mon objectif actuel est simple : obtenir mon
            diplôme tout en consolidant mes bases et en expérimentant dès que
            possible sur des projets personnels.
          </p>
          <Link to="/about" className="link">
            En savoir plus sur mon parcours
            <ArrowRight />
          </Link>
        </article>
        <article>
          {page === "home" ? (
            <h3>Mes compétences</h3>
          ) : (
            <h2>Mes compétences</h2>
          )}
          <div>
            <div>
              <SiHtml5 className="icons" />
              <p>HTML5</p>
            </div>
            <div>
              <SiCss className="icons" />
              <p>CSS3</p>
            </div>
            <div>
              <SiJavascript className="icons" />
              <p>JavaScript</p>
            </div>
            <div>
              <SiReact className="icons" />
              <p>React</p>
            </div>
            <div>
              <Circle size={50} />
              <p>UI/UX Design</p>
            </div>
            <div>
              <Circle size={50} />
              <p>Responsive design</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default AboutComponent;
