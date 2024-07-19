import React, { useState } from 'react';
import "../styles/Collapse.css";
import collapseData from "../Collapse.json";
import chevronUp from "../assets/chevron-up-solid.svg";

function Collapse() {

    const [expandedSections, setExpandedSections] = useState([]);
    const [reversedSections, setReversedSections] = useState([]);

    const toggleSection = (index) => {
        if (expandedSections.includes(index)) {
            setReversedSections([...reversedSections, index]);
            setExpandedSections(expandedSections.filter(secIndex => secIndex !== index));
            setTimeout(() => {
                setReversedSections(reversedSections.filter(secIndex => secIndex !== index));
            }, 300); // La durée de l'animation (0.5s)
        } else {
            setExpandedSections([...expandedSections, index]);
        }
    };

    return (
        <div className="collapse__content">
            {collapseData.map((item, index) => (
                <div key={index}>
                    <div className="collapse">
                        <p className="collapse__title">{item.title}</p>
                        <img
                            className={`collapse__chevron ${expandedSections.includes(index) ? 'collapse__chevron--anim' : ''}`}
                            onClick={() => toggleSection(index)}
                            src={chevronUp}
                            alt="Chevron"
                        />
                    </div>
                    {(expandedSections.includes(index) || reversedSections.includes(index)) && (
                        <p className={`collapse__comment ${expandedSections.includes(index) ? 'collapse__comment--anim' : ''} ${reversedSections.includes(index) ? 'collapse__comment--reverse' : ''}`}>
                            {item.paragraph}
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Collapse;