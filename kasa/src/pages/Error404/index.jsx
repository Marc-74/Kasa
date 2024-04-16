import "./Error404.scss";
import { Link, Navigate } from "react-router-dom";

function Error404() {
  return (
    <div className="error404">
      <span>404</span>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d’accueil</Link>
      <Navigate to="/page-inexistante"/>
    </div>
  );
}

export default Error404;

