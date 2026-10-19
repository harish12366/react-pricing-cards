import React from 'react'
import tick from '../assets/icons/tick.jpg';
import wrong from '../assets/icons/wrong.jpg';

export const PricingCard = ({title,price,features}) => {
  return (
    <div className='container'>
   
    <p className="plan-title">{title}</p>
    <h2 className="plan-price">{price}</h2>
   
{
  features.map((feature) => (
    <p
      key={feature.text}
      className={`feature-row ${feature.available ? 'available' : 'unavailable'}`}
    >
      <img
        src={feature.available ? tick : wrong}
        alt={feature.available ? 'Available' : 'Not available'}
        className="feature-icon"
      />
      {feature.text}
    </p>
  ))
}

  <button className="plan-button">BUTTON</button>
    </div>
  )
}


export default PricingCard
