import img_1 from "../../assets/Image source 1.png";
import "./Home.scss";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import logements from "../../data/logements.json";

function Home() {
  return (
    <div className="main_body">
      <section>
        <Banner
          img={img_1}
          alt="Paysage de Rocher et mer"
          title="Chez vous, partout et ailleurs"
        />
      </section>
      
      <section className="gallery">
        {logements.map((logement, index) => ( /* Boucle sur chaque élément de la liste logements */
          <Card
            key={index} /* Propriété key pour aider React à identifier chaque élément de manière unique */
            cover={logement.cover} /* Prop correspondant à l'image de couverture du logement */
            title={logement.title} 
            logement={logement.id}
          />
        ))}
      </section>
    </div>
  );
}

export default Home;
