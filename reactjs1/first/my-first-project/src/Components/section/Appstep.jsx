import React from 'react';
import './Appstep.css';

const steps = [
  {
    title: 'Register',
    description: 'Download the app from the respective stores and authenticate your phone number.',
    image: '/appstep1.jpg', // Adjust the image path accordingly
    link: '#'
  },
  {
    title: 'Estimate',
    description: 'Making your ride easy by letting you know the estimation of your ride, enter your pick up and drop location.',
    image: '/appstep2.jpg',
    link: '#'
  },
  {
    title: 'Booking',
    description: 'Book your taxi for a safe and hassle-free ride just by clicking the booking button.',
    image: '/appstep3.jpg',
    link: '#'
  }
];

const Appstep = () => {
  return (
    <div className="app-steps">
      {steps.map((step, index) => (
        <div className="step-card" key={index}>
          <div className="image-wrapper">
            <img src={step.image} alt={step.title} />
          </div>
          <div className="card-content">
            <h3>{step.title}</h3>
            <p>{step.description}</p>
            <a href={step.link} className="download-link">Download App▸</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Appstep;
