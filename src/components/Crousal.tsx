import React, { useState, useEffect } from 'react';
import './Crousal.css';
import AbbieImage from '../img/girl.svg';
import SecondImage from '../img/girl.svg'; 
import ThirdImage from '../img/girl.svg';

const carouselData = [
  {
    image: AbbieImage,
    name: 'Abbie Harvey',
    text: `I have been caring for my mom & dad off and on for about 10 years now, and I know the importance of me being there for appointments. Older people need attention, love and care that they truly deserve.`,
  },
  {
    image: SecondImage,
    name: 'Sarah Lynn',
    text: `Compassion and patience go a long way when caring for our elders. It’s a journey of love.`,
  },
  {
    image: ThirdImage,
    name: 'Olivia Moore',
    text: `Being present in small moments creates big impacts in the lives of those we care for.`,
  },
];

const Crousal: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-card slide-animation">
        <div className="carousel-image">
          <img src={carouselData[current].image} alt={carouselData[current].name} />
        </div>
        <div className="carousel-content">
          <h3>{carouselData[current].name}</h3>
          <p className="quote-mark">❝</p>
          <p className="testimonial-text">
            <em>{carouselData[current].text}</em>
          </p>
        </div>
      </div>

      <div className="carousel-dots">
        {carouselData.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${idx === current ? 'active' : ''}`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Crousal;
