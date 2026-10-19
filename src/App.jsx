import React from 'react'
import pricingPlans from './data/pricingData.js';
import PricingCard from './components/PricingCard.jsx';
import './App.css';

const App = () => {
  return (
    <>
         <h1 className="main-title">Pricing Plans</h1>
         <div className='parent'>
         {
          
            pricingPlans.map((plan) => (

          <PricingCard key={plan.id} title={plan.title} price={plan.price} highlight={plan.highlight} features={plan.features} />))
         
         }
         </div>
    </>
   
  )
}

export default App