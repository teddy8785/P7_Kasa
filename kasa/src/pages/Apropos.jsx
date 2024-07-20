import React from 'react';
import Header from "../components/Header";
import Banner from "../components/Banner";
import image_apropos from "../assets/image_apropos.png";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";
import collapseData from "../Collapse.json";

function Apropos() {
  return (
    <div>
      <Header />
      <Banner
        src={image_apropos}
        alt="cours d'eau en montagne"
        className="banner__photo banner__photo--apropos"
      />
      <div className="collapse__content--apropos">
        {collapseData.map((item, index) => (
          <Collapse
            key={index}
            title={item.title}
            paragraph={item.paragraph}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Apropos;