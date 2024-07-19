import Header from "../components/Header";
import Banner from "../components/Banner";
import image_home from "../assets/image_home.jpg";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";

function Accueil() {
  return (
    <div>
      <Header />
      <Banner 
      src={image_home}
      alt="rochers en bord de mer"
      className="banner__photo">
      <p className="banner__text banner__text--contour">Chez vous, partout et ailleurs</p>
      </Banner>
      <Gallery />
      <Footer />
    </div>
  );
}

export default Accueil;
