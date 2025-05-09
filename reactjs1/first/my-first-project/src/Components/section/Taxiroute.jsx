import React from "react";
import "./Taxiroute.css";

const taxiData = {
  Coimbatore: [
    "Chennai",
    "Madurai",
    "Salem",
    "Bangalore",
    "Trichy",
    "Hyderabad",
    "Vijayawada",
    "Pondicherry",
    "Ooty",
    "Tirunelveli"
  ],
  Chennai: [
    "Coimbatore",
    "Madurai",
    "Salem",
    "Bangalore",
    "Trichy",
    "Hyderabad",
    "Vijayawada",
    "Pondicherry",
    "Ooty",
    "Tirunelveli"
  ],
  Bangalore: [
    "Chennai",
    "Madurai",
    "Salem",
    "Coimbatore",
    "Trichy",
    "Hyderabad",
    "Vijayawada",
    "Pondicherry",
    "Ooty",
    "Tirunelveli"
  ],
  Madurai: [
    "Chennai",
    "Coimbatore",
    "Salem",
    "Bangalore",
    "Trichy",
    "Hyderabad",
    "Vijayawada",
    "Pondicherry",
    "Ooty",
    "Tirunelveli"
  ]
};

const TaxiColumn = ({ city, destinations }) => {
  return (
    <div className="taxiColumn">
      <h2 className="columnHeading">{city}</h2>
      {destinations.map((destination) => (
        <div key={destination} className="listItem">
          {city} to {destination} taxi
        </div>
      ))}
    </div>
  );
};

const TaxiRoute = () => {
  return (
    <div className="container-1">
      <div className="grid">
        {Object.entries(taxiData).map(([city, destinations]) => (
          <TaxiColumn key={city} city={city} destinations={destinations} />
        ))}
      </div>
    </div>
  );
};

export default TaxiRoute;
