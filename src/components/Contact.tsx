import "../styles/components/ContactComponent.scss"

const ContactComponent = () => {
  return (
    <section id="contact" className="container-670">
      <h2>Contactez-moi</h2>
      <p>
        Vous avez un projet en tête ou une question ? N'hésitez pas à me
        contacter, je vous répondrai dans les plus brefs délais.
      </p>
      <form action="#">
        <span>
          <label htmlFor="name">Nom</label>
          <input type="text" name="name" id="name" />
        </span>
        <span>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </span>
        <span>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message"></textarea>
        </span>
        <span>
          <input type="checkbox" name="check" id="check" />
          <label htmlFor="check">
            J'accepte que mes données soient traitées conformément à la
            politique de confidentialité. Elles ne seront utilisées que pour
            répondre à ma demande.
          </label>
        </span>
        <input type="submit" value="Envoyer le message" className="button" />
      </form>
    </section>
  );
};
 export default ContactComponent