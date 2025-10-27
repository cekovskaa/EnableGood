import React from "react";
import type { FirmsProps } from "../../types/types";

const Firms: React.FC<FirmsProps> = ({ isBlackLogos = false }) => {

  const logos = [
    { name: "Adobe", filename: "adobe" },
    { name: "Medium", filename: "medium" },
    { name: "Shopify", filename: "shopify" },
    { name: "Spotify", filename: "spotify" },
    { name: "Bitcoin", filename: "bitcoin" },
    { name: "Gumroad", filename: "gumroad" },
    { name: "Asana", filename: "asana" },
  ];

  return (
    <div className="firms-container">
      <ul className="list-unstyled">
        {logos.map((logo, index) => (
          <li key={index} className="li-item">
            <img
              src={`/images/logo-${logo.filename}${
                isBlackLogos ? "-black" : ""
              }.png`}
              alt={`${logo.name} Logo`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Firms;
