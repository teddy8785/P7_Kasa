import '../styles/Header.css'
import logo from '../assets/logo.png'
import { NavLink } from "react-router-dom";


function Header() {
  return (
    <div className="header">
      <img src={logo} alt= "logo de kasa" className="header__title" />
      <nav className="header__nav">
        <NavLink to="/Accueil" className="header__link header__link--about">Accueil</NavLink>
        <NavLink to="/Apropos" className="header__link">A Propos</NavLink>
      </nav>
    </div>
  );
}

export default Header;