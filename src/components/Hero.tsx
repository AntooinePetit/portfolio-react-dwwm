import '../styles/components/Hero.scss'

const Hero = () => {
  return (
    <section id="presentation">
        <div className="container-1540">
          <article>
            <h1>Antoine Petit</h1>
            <p>Développeur Web Front-End & Designer UI/UX</p>
            <p>
              Je crée des expériences web élégantes, intuitives et performantes
              avec une attention particulière aux détails.
            </p>
            <a href="#projects" className="button">Voir mes projets</a>
          </article>
          <img src="/images/pdp.png" alt="Photo d'Antoine Petit" />
        </div>
      </section>
  )
}

export default Hero