import AboutComponent from "../components/AboutComponent";
import Footer from "../components/Footer";
import Header from "../components/Header";

const About = () => {
  return (
    <>
      <Header />

      <main id="about-page">
        <AboutComponent page="about" />
      </main>

      <Footer />
    </>
  );
};

export default About;
