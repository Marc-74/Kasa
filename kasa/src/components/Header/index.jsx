import logoKasa from "../../assets/LOGO.png";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {

  let accueil  = "Accueil";
  let a_propos = "A Propos";

  return (
    <div className="header main_body">
      <img src={logoKasa} alt="logo du site kasa"/>
      <nav className="header_link">
        <Link to="/">{accueil}</Link>
        <Link to="">{a_propos}</Link>
      </nav>
    </div>
  );
}

export default Header;
