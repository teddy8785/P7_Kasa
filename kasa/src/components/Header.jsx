import '../styles/Header.css';
import logo from '../assets/logo.png';
import { NavLink, useLocation } from 'react-router-dom';
import data from "../Data.json";

function Header() {
  const location = useLocation();

  const appPaths = ['/Accueil', '/Apropos'];

  // Supposons que `data` soit votre tableau d'objets avec des identifiants uniques
  data.forEach(post => {
    appPaths.push(`/Logements/${post.id}`);
  });

  const isInactivePage = !appPaths.includes(location.pathname);

  return (
    <div className="header">
      <img src={logo} alt="logo de kasa" className="header__title" />
      <nav className="header__nav">
        <NavLink
          to="/Accueil"
          className={({ isActive }) =>
            isInactivePage ? "header__link header__link--inactive header__link--underline" : (isActive ? "header__link header__link--inactive" : "header__link header__link--underline")
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/Apropos"
          className={({ isActive }) =>
            isInactivePage ? "header__link header__link--inactive header__link--underline" : (isActive ? "header__link header__link--inactive" : "header__link header__link--underline")
          }
        >
          A Propos
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;