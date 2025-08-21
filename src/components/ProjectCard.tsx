import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type ProjectCardProps = {
  key: number;
  title: string;
  description: string;
  tags: string[];
  alt: string;
  image: string;
  link: string;
};

const ProjectCard = ({ key, title, description, tags, alt, image, link }: ProjectCardProps) => {
  return (
    <article key={key}>
      <img src={image} alt={alt} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <div>
          {tags.map((tag: string) => (
            <p className="tag" key={tag}>{tag}</p>
          ))}
          
        </div>
        <Link to={link} className="link">
          Voir le projet <ArrowRight />
        </Link>
      </div>
    </article>
  );
};

export default ProjectCard;
