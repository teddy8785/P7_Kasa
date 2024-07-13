import React, { useState } from 'react';
import "../styles/Collapse.css";
import chevronUp from "../assets/chevron-up-solid.svg";

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

    const [expandedSections, setExpandedSections] = useState([]);

    const toggleSection = (index) => {
        if (expandedSections.includes(index)) {
            // Si l'index est déjà ouvert, le retire de la liste pour le fermer
            setExpandedSections(expandedSections.filter(secIndex => secIndex !== index));
        } else {
            // Sinon, l'ajoute à la liste pour l'ouvrir
            setExpandedSections([...expandedSections, index]);
        }
    };

    return (
        <div className="collapse__content">
            {titleCollapse.map((title, index) => (
                <div key={index}>
                    <div className="collapse">
                        <p className="collapse__title">{title}</p>
                        <img
                            className={`collapse__chevron ${expandedSections.includes(index) ? 'collapse__chevron--anim' : ''}`}
                            onClick={() => toggleSection(index)}
                            src={chevronUp}
                            alt="Chevron"
                        />
                    </div>
                    {expandedSections.includes(index) && (
                        <div>
                            <p className="collapse__comment">{commentCollapse[index]}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Collapse;