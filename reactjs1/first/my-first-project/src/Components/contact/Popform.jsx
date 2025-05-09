import React, { useState } from "react";
import "./Popform.css"; // Import the CSS

const PopupBookingForm = () => {
  const [showForm, setShowForm] = useState(true); // Set to false to hide initially

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      pickup: e.target.pickup.value,
      drop: e.target.drop.value,
      date: e.target.date.value,
    };

    try {
      const response = await fetch("http://localhost:5000/send-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Booking sent successfully!");
        setShowForm(false);
      } else {
        alert("Failed to send booking.");
      }
    }catch (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
    }
    
  };

  return (
    <>
      {showForm && (
        <div className="popup-overlay">
          <div className="popup-form-container">
            <button className="close-btn" onClick={() => setShowForm(false)}>
              &times;
            </button>
            <h2>Book Your Ride</h2>
            <form onSubmit={handleSubmit} className="popup-form">
              <input type="text" name="name" placeholder="Name" required />
              <input type="tel" name="phone" placeholder="Phone Number" required />
              <input type="text" name="pickup" placeholder="Pickup Location" required />
              <input type="text" name="drop" placeholder="Drop Location" required />
              <input type="date" name="date" required />
              <button  type="submit" className="submit-btn">Book Now</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupBookingForm;

