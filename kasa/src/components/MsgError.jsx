import { NavLink } from "react-router-dom";
import logo404 from '../assets/404.png';

function MsgError() {
    return (
        <div className="MsgError">
            <img src={logo404} alt="error code" className="MsgError__title"/>
            <p className="MsgError__message">Oups! La page que vous demander n'existe pas.</p>
            <NavLink className="MsgError__link" to="/Accueil">Retourner sur la page d'accueil</NavLink>
        </div>
    );
}

export default MsgError;