import "../styles/Banner.css";
import image_home from "../assets/image_home.jpg";

function Banner() {
  return (
    <div className="banner">
      <img src={image_home} alt="" className="banner__photo" />
      <p className="banner__text banner__text--contour">Chez vous,partout et ailleurs</p>
    </div>
  );
}

export default Banner;
