import AboutComponent from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <>
    <Header />

    <main>
      <Hero />
      <AboutComponent />
      <Projects />
    </main>

    <Footer />
    </>
  )
};

export default Home;
