import React, { useState } from "react";
import "./Carousel.scss";
import arrow_left from "../../assets/arrow_left.png";
import arrow_right from "../../assets/arrow_right.png";

// Définition du composant Carousel qui prend en paramètre une liste d'images (pictures)
function Carousel({ pictures }) {
  // Déclaration d'un état pour suivre l'index de l'image actuellement affichée
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour gérer le clic sur une flèche
  const handleArrowClick = (direction) => {
    // Calcul du nouvel index en fonction de la direction
    let newIndex = currentIndex + direction;
    // Si le nouvel index est inférieur à 0, on revient à la dernière image de la liste
    if (newIndex < 0) {
      newIndex = pictures.length - 1;
    } 
    // Si le nouvel index est supérieur ou égal à la taille de la liste, on revient à la première image
    else if (newIndex >= pictures.length) {
      newIndex = 0;
    }
    // Mise à jour de l'index actuel
    setCurrentIndex(newIndex);
  };

  return (
      // Conteneur du carousel
    <div className="carousel-container">
      <img className="banner_img" src={pictures[currentIndex]} alt="Slider images appartements" /> 
      {pictures.length > 1 ? (
        <div>
          <div className="arrows">
            <img
              src={arrow_left}
              alt="Left Arrow"
              className="arrow arrow-left"
              onClick={() => handleArrowClick(-1)} 
            />
            <img
              src={arrow_right}
              alt="Right Arrow"
              className="arrow arrow-right"
              onClick={() => handleArrowClick(1)}
            />
          </div>
          <div className="pictures_numbers">
            <p>{`${currentIndex + 1} / ${pictures.length}`}</p>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Carousel;
