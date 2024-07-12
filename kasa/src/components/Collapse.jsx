import { useState } from 'react';
import "../styles/Collapse.css";
import chevronUp from "../assets/chevron-up-solid.svg";
import chevronDown from "../assets/chevron-down-solid.svg";

function Collapse() {

    const titleCollapse = [
        'Fiabilité',
        'Respect',
        'Service',
        'Sécurité'
    ];

    const commentCollapse = [
        'Les annonces postées sur Kasa garantissent une fiabilité totales. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
        'La bienveillance fait partie des valeurs fondatrice de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
        'La bienveillance fait partie des valeurs fondatrice de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
        'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.'
    ];
   
  const [commentOff, commentOn] = useState(null);

  const toggleSection = (index) => {
    commentOn(commentOff === index ? null : index);
  };

  return (
    <div className="collapse__content">
      {titleCollapse.map((title, index) => (
        <div key={index} className="collapse__comment--content">
          <div className="collapse">
            <p className="collapse__title">{title}</p>
            <img
              className="collapse__chevron" onClick={() => toggleSection(index)}
              src={commentOff === index ? chevronDown : chevronUp}
              alt="Chevron"
            />
          </div>
          {commentOff === index && (
              <p className="collapse__comment">{commentCollapse[index]}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Collapse;