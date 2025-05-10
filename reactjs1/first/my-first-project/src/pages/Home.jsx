import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './Home.css';
import Service from '../Components/section/Service';
import Appstep from '../Components/section/Appstep';
import ExploreCity from '../Components/section/Explorecity';
import Moredetail from '../Components/section/Moredetail';
import Points from '../Components/section/Points';
import Carimg from '../Components/section/Carimg';
import TaxiRoute from '../Components/section/Taxiroute';
import Process from '../Components/section/Process';
 


 

const slides = [
  {
    title: "Your safety is our concern!",
    description: "Practising all the precautions stated by the law.",
    buttonText: "Book now!",
    image: "images/back.jpeg", // Image path from public folder
  },
  {
    title: "Reliable & On-Time!",
    description: "We ensure timely pickups and smooth transportation every time.",
    buttonText: "Book a Ride",
    image: "images/back1.jpeg",
  },
  {
    title: "Affordable & Transparent",
    description: "No hidden charges. Clear pricing and great value rides.",
    buttonText: "Check Pricing",
    image: "images/back2.jpg",
  }
];

const home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const { title, description, buttonText } = slides[currentSlide];

  return (

   <div>
     <section className="home" 
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          position: "relative",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 50px"
        }}>
      <div className="nav-arrow left" onClick={prevSlide}>
        <FaArrowLeft />
      </div>

      <div className="slider-content">
        <h1>{title}</h1>
        <p>{description}</p>
        <button className="slider-btn">{buttonText}</button>
      </div>

      <div className="nav-arrow right" onClick={nextSlide}>
        <FaArrowRight />
      </div>
       
     
    </section>
 
     <Carimg/>
   <Points/>
    <Appstep/>
   <Service/>
    <ExploreCity/>
   <Moredetail />
      <Process/>
    <TaxiRoute/>
   </div>
    
  );
};

export default home
