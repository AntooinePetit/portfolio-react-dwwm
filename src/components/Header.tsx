import Navbar from "./Navbar"
import '../styles/components/header.scss'
import { Link } from "react-router-dom"
import { Menu } from "lucide-react"

const Header = () => {
  return (
    <header>
      <div className="container-1540">
        <Link to="/" className="logo">Antoine Petit</Link>

        <nav>
          <Navbar />
        </nav>

        <Menu id="burgermenu"/>
      </div>
    </header>
  )
}
// // <ul>
//  <li><a href="./">Accueil</a></li>
//  <li><a href="./about.html">À propos</a></li>
//  <li><a href="./projects.html">Projets</a></li>
//  <li><a href="./contact.html">Contact</a></li>
//</ul>

export default Header