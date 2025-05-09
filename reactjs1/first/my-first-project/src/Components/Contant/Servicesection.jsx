import React from "react";
import "./Servicesection.css";

const services = [
  {
    title: "Outstation Cabs",
    heading: "Explore beyond the city limits with ease.",
    description: "From hill stations to weekend getaways, our outstation cabs offer comfort, safety, and affordability all the way.",
    image: "/det1.jpg",
    reverse: false,
  },
  {
    title: "Airport Taxi",
    heading: "Timely airport transfers you can rely on.",
    description: "Our professional drivers ensure you reach the airport with time to spare, every time. Hassle-free booking included.",
    image: "/det2.jpg",
    reverse: true,
  },
  {
    title: "City Rides",
    heading: "Quick and convenient travel around the city.",
    description: "Need to get to work, run errands, or meet friends? Our city rides are fast, clean, and budget-friendly.",
    image: "/det3.jpg",
    reverse: false,
  },
  {
    title: "Corporate Travel",
    heading: "Professional travel solutions for your business needs.",
    description: "Offer seamless transportation for your employees and guests with our executive cab services.",
    image: "/det4.jpg",
    reverse: true,
  },
  {
    title: "Tour Packages",
    heading: "Customizable sightseeing tours at great rates.",
    description: "Enjoy curated city tours or nature drives with experienced drivers and comfortable vehicles.",
    image: "/det5.jpg",
    reverse: false,
  },
  {
    title: "Event Transport",
    heading: "Make your events stress-free with transport handled.",
    description: "Weddings, conferences, or concerts — we handle all your group travel needs efficiently.",
    image: "/det6.jpg",
    reverse: true,
  }
];


const Servicesection = () => {
  return (
    <section className="services">
      {services.map((service, index) => (
        <div
          className={`service-row ${service.reverse ? "reverse" : ""}`}
          key={index}
        >
          <div className="service-text">
            <h4 className="service-title">{service.title}</h4>
            <h2 className="service-heading">{service.heading}</h2>
            <p>{service.description}</p>
            <button className="download-btn">Download Now</button>
          </div>
          <div className="service-image">
            <img src={service.image} alt={service.title} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Servicesection;
