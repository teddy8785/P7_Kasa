import "../styles/Gallery.css";
import data from "../Data.json";
import { NavLink } from 'react-router-dom';

function Gallery() {

  return (
    <div className="gallery">
     {
        data.map(post => (
              <article className="gallery__content" key={post.id}>
                <NavLink to={`/Logements/${post.id}`}>
                <img className="gallery__img" src={post.cover} alt=""></img>
                <p className="gallery__title">{post.title}</p>
                </NavLink>
            </article>
        ))
     }
    </div>
  );
}
export default Gallery;
