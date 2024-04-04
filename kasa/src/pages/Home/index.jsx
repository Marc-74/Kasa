import img_1 from "../../assets/Image source 1.png";
import "./Home.scss";
import Banner from "../../components/Banner";

function Home() {
  return (
    <div className="main_body">
      <section>
        <Banner
          img={img_1}
          alt="Vue sur bord de mer"
          title="Chez vous, partout et ailleurs"
        />
      </section>
      </div>
  );
}

export default Home;