import { Link } from "react-router-dom";
import data from "../data/projects.json";
import "../styles/components/ProjectsComponent.scss";
import ProjectCard from "./ProjectCard";

interface ProjectsProps {
  page: string;
}

const Projects = ({ page }: ProjectsProps) => {
  const projects = [];
  if (page === "home") {
    for (let i = data.length - 1; i > data.length - 3; i--) {
      projects.push(data[i]);
    }
    return (
      <section id="projects">
        <div className="container-1540">
          <h2>Mes projets récents</h2>
          <p>
            Découvrez une sélection de mes travaux récents qui démontrent mes
            compétences en développement web et design d'interface.
          </p>
          <div className="liste-projets">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id.toString()}
                title={project.title}
                description={project.description}
                tags={project.tags}
                alt={project.alt}
                image={project.image}
                link={project.link}
              />
            ))}
          </div>
          <Link to="/projets" className="button">
            Voir tous les projets
          </Link>
        </div>
      </section>
    );
  }

  if (page === "projets") {
    const reversed = [...data].reverse();
    return (
      <section id="projects">
        <div className="container-1540">
          <h2>Mes projets</h2>
          <p>
            Découvrez une sélection de mes travaux récents qui démontrent mes
            compétences en développement web et design d'interface.
          </p>
          <div className="liste-projets">
            {reversed.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id.toString()}
                title={project.title}
                description={project.description}
                tags={project.tags}
                alt={project.alt}
                image={project.image}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
};

export default Projects;
