import ContactComponent from "../components/ContactComponent"
import Footer from "../components/Footer"
import Header from "../components/Header"

const Contact = () => {
  return (
    <>
      <Header />

      <main id="contact-page">
        <ContactComponent page="contact"/>
      </main>

      <Footer />
    </>
  )
}

export default Contact