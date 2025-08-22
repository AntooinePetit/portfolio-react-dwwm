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

export default Header