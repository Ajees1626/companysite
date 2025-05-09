import React from 'react';
import './Service.css';

const services = [
  {
    title: 'One Way Taxi',
    image: 'ser1.jpeg', // Replace with your actual image path
  },
  {
    title: 'Airport Taxi',
    image: 'ser2.jpg',
  },
  {
    title: 'Outstation Taxi',
    image: 'ser3.jpg',
  },
  {
    title: 'Drop Taxi',
    image: ' ser4.jpg',
  },
];

const Services = () => {
  return (
    <section className="taxi-services">
      <h2>What do we do?</h2>
      <p className="subtitle-1">
        Chennai Drop Taxi have been proving various taxi services with utmost satisfaction. <br />
        We are now available as an app to make it easier for you.
      </p>
      <div className="service-cards">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} />
            <h4>{service.title}</h4>
          </div>
        ))}
      </div>
      <div className="buttons">
        <a href="#" className="btn-primary">Book now!</a>
        <a href="#" className="btn-secondary">Know more</a>
      </div>
    </section>
  );
};

export default Services;
