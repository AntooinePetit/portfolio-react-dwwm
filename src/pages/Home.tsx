import AboutComponent from "../components/AboutComponent";
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
        <AboutComponent page="home" />
        <Projects page="home" />
        <ContactComponent page="home"/>
      </main>

      <Footer />
    </>
  );
};

export default Home;
