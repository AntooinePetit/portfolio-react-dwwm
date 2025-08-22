import Footer from "../components/Footer";
import Header from "../components/Header";
import '../styles/pages/NotFound.scss'

const NotFound = () => {
  return (
    <>
    <Header />

    <main id="error-404">
      <h1>Erreur 404 page non trouvé</h1>
    </main>

    <Footer />
    </>
  )
};

export default NotFound;
