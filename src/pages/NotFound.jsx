import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <div className="notFound">
      <div className="notFound-content">
        <h2>Erreur 404</h2>
        <NavLink to="/">
          Retour à l'accueil<i className="fa-solid fa-home"></i>
        </NavLink>
      </div>
      <Footer />
    </div>
  );
}
