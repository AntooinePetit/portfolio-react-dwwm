import {
  SiCss,
  SiHtml5,
  SiJavascript,
  SiReact,
} from "@icons-pack/react-simple-icons";
import { ArrowRight, Circle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "../styles/components/AboutComponent.scss";

interface AboutComponentProps {
  page: string;
}

const AboutComponent = ({ page }: AboutComponentProps) => {
  const { t } = useTranslation();

  return (
    <section id="about" className="container-1540">
      {page === "home" ? (
        <h2>{t("about.title")}</h2>
      ) : (
        <h1>{t("about.title")}</h1>
      )}
      <div>
        <article>
          {page === "home" ? (
            <h3>{t("about.career.title")}</h3>
          ) : (
            <h2>{t("about.career.title")}</h2>
          )}
          <p>{t("about.career.paragraphs.first")}</p>
          <p>{t("about.career.paragraphs.second")}</p>
          <p>{t("about.career.paragraphs.third")}</p>
          <Link to="/about" className="link">
            {t("about.career.learnMoreBtn")}
            <ArrowRight />
          </Link>
        </article>
        <article>
          {page === "home" ? (
            <h3>{t("about.skillsTitle")}</h3>
          ) : (
            <h2>{t("about.skillsTitle")}</h2>
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
