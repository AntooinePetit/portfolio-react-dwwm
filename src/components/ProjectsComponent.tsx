import { Link } from "react-router-dom";
import "../styles/components/ProjectsComponent.scss"
import { ArrowRight } from "lucide-react";


const Projects = () => {
  return (
    <section id="projects">
      <div className="container-1540">
        <h2>Mes projets récents</h2>
        <p>
          Découvrez une sélection de mes travaux récents qui démontrent mes
          compétences en développement web et design d'interface.
        </p>
        <div className="liste-projets">
          <article>
            <img src="/images/vividly.png" alt="Projet Vividly" />
            <div>
              <h3>Vividly</h3>
              <p>
                Développement d'un site de recherche d'artisan de qualité, avec
                expérience personnalisé selon la localisation
              </p>
              <div>
                <p className="tag">HTML5</p>
                <p className="tag">CSS3</p>
                <p className="tag">Responsive design</p>
                <p className="tag">Mobile first</p>
              </div>
              <Link to="#" className="link">
                Voir le projet <ArrowRight />
              </Link>
            </div>
          </article>
          <article>
            <img src="/images/home-key.png" alt="Projet Home Key" />
            <div>
              <h3>Home Key</h3>
              <p>
                Développement d'une plateforme de location de logements avec
                fonctionnalité de recherche selon plusieurs critères
                sélectionnables.
              </p>
              <div>
                <p className="tag">HTML5</p>
                <p className="tag">CSS3</p>
                <p className="tag">Responsive design</p>
              </div>
              <Link to="#" className="link">
                Voir le projet <ArrowRight />
              </Link>
            </div>
          </article>
        </div>
        <Link to="/projets" className="button">
          Voir tous les projets
        </Link>
      </div>
    </section>
  );
};

export default Projects