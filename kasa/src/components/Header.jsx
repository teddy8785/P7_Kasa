import '../styles/Header.css'
import logo from '../assets/logo.png'


function Header() {
  return (
    <div className="header">
      <img src={logo} alt= "logo de kasa" className="header__title" />
      <nav className="header__nav">
        <a href="/" className="header__link">Accueil</a>
        <a href="/" className="header__link header__link--about">A Propos</a>
      </nav>
    </div>
  );
}

export default Header;