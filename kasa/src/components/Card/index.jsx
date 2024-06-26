import "./Card.scss";
import { Link } from "react-router-dom";

function Card({ cover, title, logement }) { // La fonction Card est définie comme un composant React prenant trois props
  return (
    <article className="card">
      <Link to={`/fiche-de-logement/${logement}`}>
        <img src={cover} alt="Images de logements" />
        <span>{title}</span>
      </Link>
    </article>
  );
}

export default Card;
