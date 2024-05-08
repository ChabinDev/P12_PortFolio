import React from "react";

const Footer = () => {
  const theme = "Dark";

  const year = new Date();

  return (
    <footer>
      <div className="address">
        <div className={`content ${theme}`}>
          <h2>ChabinDev</h2>
          <p>Nantes</p>
          <p>Développeur Web Junior - Freelance</p>
        </div>
      </div>
      <div className={`credits '${theme}`}>
        <p>France - {year.getFullYear()} © - All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
