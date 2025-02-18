import Header from "../components/Header";
import Slideshow from "../components/Slideshow";
import Information from "../components/Information";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";
import data from '../Data.json';
import { useParams, Navigate } from 'react-router-dom';

function Logements() {

  const { id } = useParams();
  const foundItem = data.find(item => item.id === id);

  if (!foundItem) {
    return <Navigate to="/Error" />;
  }

  const { description, equipments } = foundItem;

  return (
    <div>
      <Header />
      <Slideshow />
      <Information />
      <div className="collapse__content--logement">
        <Collapse
          title="Description"
          paragraph={description} 
          customClass="collapse__logement"
          />
        <Collapse
          title="Équipments"
          paragraph={<ul className="collapse__puce">{equipments.map((item, index) => (
            <li key={index}>{item}</li>
          ))}</ul>}
          customClass="collapse__logement"
        />
      </div>
      <Footer />
    </div>
  );
}

export default Logements;