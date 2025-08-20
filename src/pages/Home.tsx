import AboutComponent from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
    <Header />

    <main>
      <Hero />
      <AboutComponent />
    </main>

    <Footer />
    </>
  )
};

export default Home;
