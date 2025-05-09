import React from "react";
import "./Qualityservice.css";
import { FaMoneyBillWave, FaUserShield, FaClock } from "react-icons/fa";

const Qualityservice = () => {
  return (
    <section className="quality-service">
      <div className="service-header">
        <h2>We provide quality service that treats everyone.</h2>
        <p>
          Chennai Drop Taxi cabs have been proving various taxi services
          with utmost satisfaction. We are now available as an app to make it
          easier for you..
        </p>
      </div>

      <div className="service-features">
        <div className="feature">
          <div className="icon-bg">
            <FaMoneyBillWave className="icon" />
          </div>
          <h4>Affordable Price</h4>
        </div>

        <div className="feature">
          <div className="icon-bg">
            <FaUserShield className="icon" />
          </div>
          <h4>Secure and Safer</h4>
        </div>

        <div className="feature">
          <div className="icon-bg">
            <FaClock className="icon" />
          </div>
          <h4>24x7 Service</h4>
        </div>
      </div>

      <div className="cta-button">
        <button>View Pricing Plans</button>
      </div>
    </section>
  );
};

export default Qualityservice;
