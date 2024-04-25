import { useState } from "react";
import "./Animation_collapse.scss";

function Collapse({ label, description }) { // 2 props label et description
  // Utilisation du hook useState pour gérer l'état de l'ouverture/fermeture
  const [isOpen, setIsOpen] = useState(false);
  return (
    <article className={`article ${isOpen ? "open" : ""}`}>
      <span className="item">
        <p>{label}</p>
      
        <span
          className={`material-symbols-outlined arrow ${isOpen ? "open" : ""}`} // Utilisation d'une icône et d'un événement onClick pour basculer isOpen
          onClick={() => setIsOpen(!isOpen)}
        >
          expand_less
        </span>
      </span>
      <div className="description"> 
        <span>{description}</span>
      </div>
    </article>
  );
}

export default Collapse;
