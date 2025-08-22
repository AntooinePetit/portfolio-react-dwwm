import ContactComponent from "../components/ContactComponent"
import Footer from "../components/Footer"
import Header from "../components/Header"

const Contact = () => {
  return (
    <>
      <Header />

      <main id="contact-page">
        <ContactComponent />
      </main>

      <Footer />
    </>
  )
}

export default Contact