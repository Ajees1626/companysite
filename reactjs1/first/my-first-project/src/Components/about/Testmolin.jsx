import React from "react";
import "./Testmolin.css";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Jessica",
    location: "Bangalore",
    review:
      "Best taxi service ever, I had to change my destination and they made it easy. I had to pay for the distance I traveled but it was worth the money.",
  },
  {
    name: "Blake",
    location: "Chennai",
    review:
      "Safety is what I prefer, the driver was wearing the mask all the time and took all the safety precautions",
  },
  {
    name: "Ava",
    location: "Hyderabad",
    review:
      "Best experience, timely pickup, smooth ride. Driver was professional and polite throughout the journey.",
  },
];

const Testmolin = () => {
  return (
    <section className="testimonials">
      <h2>
        Hear from what our <br /> clients say.
      </h2>

      <div className="testimonials-grid">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-header">
              <div className="avatar-quote">
                <FaQuoteLeft className="quote-icon" />
                <span className="avatar-text">Avata</span>
              </div>
              <div>
                <h4>{t.name}</h4>
                <p className="location">{t.location}</p>
              </div>
            </div>

            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="star-icon" />
              ))}
            </div>

            <p className="review-text">“{t.review}”</p>
          </div>
        ))}
      </div>

      <button className="review-button">Read All Reviews</button>
    </section>
  );
};

export default Testmolin;
