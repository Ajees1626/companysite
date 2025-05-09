import React, { useState } from "react";
import "./Bookingform.css";

const Bookingform = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pickup: "",
    drop: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Submit logic here (API call or validation)
    console.log("Booking Submitted:", formData);
    alert("Booking submitted successfully!");
  };

  return (
    <section className="booking-section">
      <div className="booking-form-container">
        <h2 className="booking-title">Book Your Ride Now</h2>
        <form className="booking-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="text"
            name="pickup"
            placeholder="Pickup Location"
            required
            value={formData.pickup}
            onChange={handleChange}
          />
          <input
            type="text"
            name="drop"
            placeholder="Drop Location"
            required
            value={formData.drop}
            onChange={handleChange}
          />
          <input
            type="date"
            name="date"
            required
            value={formData.date}
            onChange={handleChange}
          />
          <button type="submit" className="booking-btn">
            Confirm Booking
          </button>
        </form>
      </div>
    </section>
  );
};

export default Bookingform;
