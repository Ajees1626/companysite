import React from 'react';
import './ExploreCity.css';

const cities = [
  {
    name: 'Delhi',
    state: 'Tamilnadu',
    image: 'city1.jpeg'
  },
  {
    name: 'Ooty',
    state: 'Tamilnadu',
    image: 'city2.jpeg'
  },
  {
    name: 'Kerala',
    state: 'Karnataka',
    image: 'city3.jpeg'
  },
  {
    name: 'Bangalore',
    state: 'Tamilnadu',
    image: 'city4.jpeg'
  },
  {
    name: 'Andaman',
    state: 'Tamilnadu',
    image: 'city5.jpeg'
  },
  {
    name: 'Ladakh',
    state: 'Tamilnadu',
    image: 'city6.jpeg'
  },
  {
    name: 'Taj Mahal',
    state: 'Tamilnadu',
    image: 'city7.jpeg'
  },
  {
    name: 'Thanjavur',
    state: 'Tamilnadu',
    image: 'city8.jpeg'
  }
];

const ExploreCity = () => {
  return (
    <div className="explore-section">
      <h2>Explore the roads with us!</h2>
      <div className="city-grid">
        {cities.map((city, index) => (
          <div key={index} className="city-card">
            <img src={city.image} alt={city.name} className="city-image" />
            <div className="city-info">
              <h3>{city.name}</h3>
              <p>{city.state}</p>
              <span className="plus-icon">＋</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreCity;
