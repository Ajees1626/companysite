import React from 'react';
import './Points.css'; // Optional: External CSS for styles

const Points = () => {
  return (
    <section className="points-section">
      <div className="container">
        <h2 className="title">Points before ur travel</h2>

        <h3 className="subtitle">Any Sedan</h3>
        <p className="text">
          Swift Dzire, Toyota Etios, Tata Zest, Hyundai Xcent, Nissan Sunny — anyone will be assigned.
        </p>

        <h3 className="subtitle">Any SUV</h3>
        <p className="text">
          Innova, Xylo, Ertiga — any one will be assigned.
        </p>

        <ul className="rules-list">
          <li>Maximum 4 passenger capacity for Sedan</li>
          <li>Maximum 7 passenger capacity for SUV</li>
          <li>Minimum 130km coverage for one way trip</li>
          <li>Minimum 250km coverage for round trip</li>
          <li>Maximum 4 passenger capacity for Sedan</li>
          <li>Maximum 7 passenger capacity for SUV</li>
          <li>Minimum 130km coverage for one way trip</li>
          <li>Minimum 250km coverage for round trip</li>
          <li>Maximum 4 passenger capacity for Sedan</li>
          <li>Maximum 7 passenger capacity for SUV</li>
          <li>Minimum 130km coverage for one way trip</li>
          <li>Minimum 250km coverage for round trip</li>
        </ul>
      </div>
    </section>
  );
};

export default Points;
