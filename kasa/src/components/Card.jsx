import "../styles/Gallery.css";
import { NavLink } from 'react-router-dom';

function Card({ id, cover, title }) {
    
        return (
          <article className="gallery__content" id={id} key={id}>
            <NavLink className="gallery__link" to={`/Logements/${id}`}>
              <img className="gallery__img" src={cover} alt={title}></img>
              <p className="gallery__title">{title}</p>
            </NavLink>
          </article>
        );
  }
  export default Card;