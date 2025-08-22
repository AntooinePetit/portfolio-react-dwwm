import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type ProjectCardProps = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  alt: string;
  image: string;
  link: string;
  page: string;
};

const ProjectCard = ({ id, title, description, tags, alt, image, link, page }: ProjectCardProps) => {
  return (
    <article>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={alt} />
      </a>
      <div>
        {page === "home" ? (
            <h3>{title}</h3>
          ) : (
            <h2>{title}</h2>
          )}
        <p>{description}</p>
        <ul>
          {tags.map((tag: string, index) => (
            <li className="tag" key={`${id}-${index}`}>{tag}</li>
          ))}      
        </ul>
        <Link to={link} className="link">
          Voir le projet <ArrowRight />
        </Link>
      </div>
    </article>
  );
};

export default ProjectCard;
