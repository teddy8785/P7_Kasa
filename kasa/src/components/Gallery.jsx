import "../styles/Gallery.css";
import data from "../Data.json";

function Gallery() {
//   const [photos, setPhotos] = useState([]);

//   const generePhoto = async () => {
//     const response = await fetch("/Data.json");
//     const data = response.json().then((json) => {
//       console.log(json);
//     });
//     console.log(data);
//   };

  return (
    <div className="gallery">
     {
        data.map(post => (
            <article className="gallery__content" key={post.id}>
                <img className="gallery__img" src={post.cover} alt=""></img>
                <div className="gallery__title">{post.title}</div>
            </article>
        ))
     }
    </div>
  );
}
export default Gallery;
