import "../styles/Gallery.css";
import data from "../Data.json";

function Gallery() {

  return (
    <div className="gallery">
     {
        data.map(post => (
            <article className="gallery__content" key={post.id}>
                <img className="gallery__img" src={post.cover} alt=""></img>
                <p className="gallery__title">{post.title}</p>
            </article>
        ))
     }
    </div>
  );
}
export default Gallery;
