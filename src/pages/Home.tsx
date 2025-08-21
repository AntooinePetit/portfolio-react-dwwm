import AboutComponent from "../components/About";
import ContactComponent from "../components/ContactComponent";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/ProjectsComponent";

const Home = () => {
  return (
    <>
    <Header />

    <main>
      <Hero />
      <AboutComponent />
      <Projects page="home" />
      <ContactComponent />
    </main>

    <Footer />
    </>
  )
};

export default Home;
