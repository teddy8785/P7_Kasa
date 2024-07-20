import React, { useState } from 'react';
import "../styles/Collapse.css";
import chevronUp from "../assets/chevron-up-solid.svg";

function Collapse({title , paragraph}) {

    const [expandedSections, setExpandedSections] = useState([]);
    const [reversedSections, setReversedSections] = useState([]);

    const toggleSection = (index) => {
        if (expandedSections.includes(index)) {
            setReversedSections([...reversedSections, index]);
            setExpandedSections(expandedSections.filter(secIndex => secIndex !== index));
            setTimeout(() => {
                setReversedSections(reversedSections.filter(secIndex => secIndex !== index));
            }, 300);
        } else {
            setExpandedSections([...expandedSections, index]);
        }
    };

    return (
    
        <div className='collapse__content'>
                    <div className="collapse">
                        <p className="collapse__title">{title}</p>
                        <img
                            className={`collapse__chevron ${expandedSections.includes() ? 'collapse__chevron--anim' : ''}`}
                            onClick={() => toggleSection()}
                            src={chevronUp}
                            alt="Chevron"
                        />
                    </div>
                    {(expandedSections.includes() || reversedSections.includes()) && (
                        <span className={`collapse__comment ${expandedSections.includes() ? 'collapse__comment--anim' : ''} ${reversedSections.includes() ? 'collapse__comment--reverse' : ''}`}>
                            {paragraph}
                        </span>
                    )}
                </div>
    );
}

export default Collapse;