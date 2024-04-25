import React from "react";
import { Link, useLocation } from "react-router-dom";
import logoKasa from "../../assets/LOGO.png";
import "./Header.scss";

function Header() {
  const location = useLocation(); 

  return (
    <div className="header main_body">
      <img src={logoKasa} alt="logo kasa" />
      <nav className="header_link">
        <Link to="/" className={location.pathname === "/" ? "current" : ""}>
          Accueil
        </Link>
        <Link
          to="/a-propos"
          className={location.pathname === "/a-propos" ? "current" : ""}
        >
          A Propos
        </Link>
      </nav>
    </div>
  );
}

export default Header;

