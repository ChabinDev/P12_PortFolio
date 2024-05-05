import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <menu className="navigation">
      <ul>
        <NavLink
          to="/"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>Accueil</li>
        </NavLink>

        <li className="nav-portfolio">
          PorteFolio
          <ul className="nav-projects">
            <NavLink
              to="/Projet-1"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>Projet 1 : Booki</li>
            </NavLink>

            <NavLink
              to="/Projet-2"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>Projet 2 : Ohmyfood</li>
            </NavLink>

            <NavLink
              to="/Projet-3"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>Projet 3 : Print it</li>
            </NavLink>

            <NavLink
              to="/Projet-4"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>Projet 4 : Kasa</li>
            </NavLink>
          </ul>
        </li>

        <NavLink
          to="/Contact"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>Contact</li>
        </NavLink>
      </ul>
    </menu>
  );
};

export default Navigation;
