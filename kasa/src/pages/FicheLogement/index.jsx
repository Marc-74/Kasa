import React from "react";
import Carousel from "../../components/Carousel";
import Collapse from "../../components/Collapse";
import "./FicheLogement.scss";
import Rating from "../../components/Rating";
import { Navigate, useParams } from "react-router-dom"; // Utilisation des fonctionnalités de React Router pour gérer l’erreur et rediriger vers la page d’erreur
import logements from "../../data/logements.json";
import Tag from "../../components/Tag";
import Avatar from "../../components/Avatar";

function FicheLogement() {
  const params = useParams(); // Hook qui récupère les paramètres de l'URL
  const logement = logements.find((element) => element.id === params.id); // Recherche un logement dans le tableau 'logements' dont l'ID correspond au paramètre 'id' de l'URL
  
  if (!logement) { // Vérifie si logement est défini // ici chaîne de caractères vide 
    return <Navigate to="/page-inexistante" />; // Redirection vers la page d’erreur en cas d’id incorrect
  }
  
  return (
    <div className="fiche_logement main_body">
      <Carousel pictures={logement.pictures} />
      <div className="detail">
        <div>
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <ul>
            {logement.tags.map((tag) => ( // méthode map pour parcourir un tableau (ici logement.tags)
              <li key={tag}>
                <Tag label={tag} />
              </li>
            ))}
          </ul>
        </div>
        <div className="commercial_and_rating">
          <Avatar name={logement.host.name} picture={logement.host.picture} />
          <Rating value={logement.rating} max="5" />
        </div>
      </div>
      <div className="collapses">
        <Collapse label="Description" description={logement.description} />
        <Collapse label="Équipements"
          description={logement.equipments.map((equipment) => (
            <p key={equipment}>{equipment}</p>
          ))}
        />
      </div>
    </div>
  );
}

export default FicheLogement;
