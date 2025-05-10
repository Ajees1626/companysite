import React from 'react';
import './Carimg.css';
// import car1 from '/assets/car1.png'


const tariffs = [
  {
    name: 'SEDAN',
    image: 'images/car.png',
    fare: {
      oneWay: '14/KM',
      roundTrip: '13/KM',
      driverBatta: 'Rs. 300'
    }
  },
  {
    name: 'ETIOS',
    image: 'images/car1.png', // Replace with your actual path
    fare: {
      oneWay: '14/KM',
      roundTrip: '13/KM',
      driverBatta: 'Rs. 300'
    }
  },
  {
    name: 'SUV',
    image: 'images/car2.png', // Replace with your actual path
    fare: {
      oneWay: '19/KM',
      roundTrip: '18/KM',
      driverBatta: 'Rs. 400'
    }
  },
  {
    name: 'SUV',
    image: 'images/car3.png', // Replace with your actual path
    fare: {
      oneWay: '19/KM',
      roundTrip: '18/KM',
      driverBatta: 'Rs. 400'
    }
  },
  {
    name: 'SUV',
    image: 'images/car4.png', // Replace with your actual path
    fare: {
      oneWay: '19/KM',
      roundTrip: '18/KM',
      driverBatta: 'Rs. 400'
    }
  },
  {
    name: 'SUV',
    image: 'images/car5.png', // Replace with your actual path
    fare: {
      oneWay: '19/KM',
      roundTrip: '18/KM',
      driverBatta: 'Rs. 400'
    }
  }
];

const carimg = () => {
  return (
    <section className="tariff-section">
      <h2>Our Tariff</h2>
      <div className="tariff-cards">
        {tariffs.map((car, index) => (
          <div className="tariff-card" key={index}>
            <img src={car.image} alt={car.name} />
            <div className="card-details">
              <h3>{car.name}</h3>
              <ul>
                <li><span>One Way Fare</span> {car.fare.oneWay}</li>
                <li><span>Round Trip Fare</span> {car.fare.roundTrip}</li>
                <li><span>Driver Batta</span> {car.fare.driverBatta}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default carimg;