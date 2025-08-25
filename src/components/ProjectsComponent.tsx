import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import data from "../data/projects.json";
import "../styles/components/ProjectsComponent.scss";
import ProjectCard from "./ProjectCard";

interface ProjectsProps {
  page: string;
}

const Projects = ({ page }: ProjectsProps) => {
  const { t } = useTranslation();

  const projects = [];
  if (page === "home") {
    for (let i = data.length - 1; i > data.length - 3; i--) {
      projects.push(data[i]);
    }
    return (
      <section id="projects">
        <div className="container-1540">
          <h2>{t("projects.title.home")}</h2>
          <p>{t("projects.description.home")}</p>
          <div className="liste-projets">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id.toString()}
                title={t(`${project.i18nKey}.title`)}
                description={t(`${project.i18nKey}.description`)}
                tags={project.tags}
                alt={t(`${project.i18nKey}.alt`)}
                image={project.image}
                link={project.link}
                page={page}
              />
            ))}
          </div>
          <Link to="/projets" className="button">
            {t("projects.buttons.seeAll")}
          </Link>
        </div>
      </section>
    );
  }

  if (page === "projets") {
    return (
      <section id="projects">
        <div className="container-1540">
          <h1>{t("projects.title.all")}</h1>
          <p>{t("projects.description.all")}</p>
          <div className="liste-projets">
            {[...data].reverse().map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id.toString()}
                title={t(`${project.i18nKey}.title`)}
                description={t(`${project.i18nKey}.description`)}
                tags={project.tags}
                alt={t(`${project.i18nKey}.alt`)}
                image={project.image}
                link={project.link}
                page={page}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
};

export default Projects;
