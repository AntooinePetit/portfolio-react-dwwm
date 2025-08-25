import { useTranslation } from "react-i18next";
import "../styles/components/ContactComponent.scss";

interface ContactComponentProps {
  page: string;
}

const ContactComponent = ({ page }: ContactComponentProps) => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="container-670">
      {page === "home" ? (
        <h2>{t("contact.title")}</h2>
      ) : (
        <h1>{t("contact.title")}</h1>
      )}
      <p>{t("contact.description")}</p>
      <form action="#">
        <span>
          <label htmlFor="name">{t("contact.nameLabel")}</label>
          <input type="text" name="name" id="name" />
        </span>
        <span>
          <label htmlFor="email">{t("contact.emailLabel")}</label>
          <input type="email" name="email" id="email" />
        </span>
        <span>
          <label htmlFor="message">{t("contact.messageLabel")}</label>
          <textarea name="message" id="message" />
        </span>
        <span>
          <input type="checkbox" name="check" id="check" />
          <label htmlFor="check">{t("contact.checkbox")}</label>
        </span>
        <input type="submit" value={t("contact.sendForm")} className="button" />
      </form>
    </section>
  );
};
export default ContactComponent;
