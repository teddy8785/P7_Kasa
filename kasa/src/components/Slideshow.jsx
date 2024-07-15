import React from 'react';
import '../styles/Slideshow.css';
import arrowLeft from '../assets/arrow_left.png';
import arrowRight from '../assets/arrow_right.png';

function Slideshow() {
    return (
        <div className="slideshow">
            <img className="slideshow__img" src="" alt="" />
            <img id="arrow_left" className="slideshow__arrow slideshow__arrow--left" src={arrowLeft} alt="fleche gauche" />
            <img id="arrow_right" className="slideshow__arrow slideshow__arrow--right" src={arrowRight} alt="fleche droite" />
            <div className="sideshow__dots">
		</div>
        </div>
    );
}

export default Slideshow;