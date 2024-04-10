import logoKasa from "../../assets/LOGO.png";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <div className="header main_body">
      <img src={logoKasa} alt="logo kasa" />
      <nav className="header_link">
        <Link to="/">Accueil</Link>
        <Link to="/a-propos">À Propos</Link>
      </nav>
    </div>
  );
}

export default Header;

