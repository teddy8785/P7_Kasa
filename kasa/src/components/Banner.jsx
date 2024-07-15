import { useLocation } from 'react-router-dom';
import "../styles/Banner.css";
import image_home from "../assets/image_home.jpg";
import image_apropos from "../assets/image_apropos.png";

function Banner() {
  const location = useLocation();

  return (
    <div className="banner">
      {(location.pathname === '/Accueil') && 
        <img src={image_home} alt="rochers en bord de mer" className="banner__photo" />
      }
      {(location.pathname === '/Accueil') &&
        <p className="banner__text banner__text--contour">Chez vous, partout et ailleurs</p>
      }
      {(location.pathname === '/Apropos') &&
        <img src={image_apropos} alt="cours d'eau en montagne" className="banner__photo--apropos" />
      }
    </div>
  );
}

export default Banner;
