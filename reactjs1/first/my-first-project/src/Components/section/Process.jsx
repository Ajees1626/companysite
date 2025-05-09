import React from 'react';
import './Process.css';
 

const steps = [
  {
    title: 'Download',
    image: '/ver2.jpg',
  },
  {
    title: 'Check Fare',
    image: '/ver3.jpg'
  },
  {
    title: 'Confirm',
    image: '/ver1.jpg',
  }
];

const Process = () => {
  return (
    <section className="process-section">
      <h2>Just like that!</h2>
      <div className="process-steps">
        {steps.map((step, index) => (
          <div key={index} className="step">
            <img src={step.image} alt={step.title} />
            <h3>{step.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
