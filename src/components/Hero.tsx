import { useTranslation } from "react-i18next";
import "../styles/components/Hero.scss";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="presentation">
      <div className="container-1540">
        <article>
          <h1>Antoine Petit</h1>
          <p>{t("global.jobDescription")}</p>
          <p>{t("hero.description")}</p>
          <a href="#projects" className="button">
            {t("hero.seeProjectsBtn")}
          </a>
        </article>
        <img src="/images/pdp.png" alt={t("hero.profilePictureAlt")} />
      </div>
    </section>
  );
};

export default Hero;
