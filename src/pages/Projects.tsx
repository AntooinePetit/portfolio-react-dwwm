import Footer from "../components/Footer"
import Header from "../components/Header"
import ProjectsComponent from "../components/ProjectsComponent"

const Projects = () => {
  return (
    <>
      <Header />

      <main id="projects-page">
        <ProjectsComponent page="projets" />
      </main>

      <Footer />
    </>
  )
}

export default Projects