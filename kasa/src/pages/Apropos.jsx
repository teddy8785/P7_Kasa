import Header from "../components/Header";
import Banner from "../components/Banner";
import image_apropos from "../assets/image_apropos.png";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";

function Apropos() {
  return (
    <div>
      <Header />
      <Banner 
      src={image_apropos}
      alt="cours d'eau en montagne"
      className="banner__photo banner__photo--apropos"
      >
      </Banner>
      <Collapse />
      <Footer />
    </div>
  );
}

export default Apropos;