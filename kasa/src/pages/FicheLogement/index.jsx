import Carousel from "../../components/Carousel";
import "./FicheLogement.scss";
import { Navigate, useParams } from "react-router-dom";
import logements from "../../data/logements.json";

function FicheLogement() {
  const params = useParams();
  const logement = logements.find((element) => element.id === params.id);
  
  if (logement === null) {
    return <Navigate to="/not-found" />;
  
  }
  return (
    <div className="fiche_logement main_body">
      <Carousel pictures={logement.pictures} />
     
    
    </div>
  );
}

export default FicheLogement;

