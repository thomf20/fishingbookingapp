import React from 'react';
import BoatCard from './BoatCard';

const boats = [
  { name: 'Sunny Fisher', description: 'Perfect for sunny days.' },
  { name: 'Storm Chaser', description: 'For thrill-seekers.' },
  { name: 'Calm Waters', description: 'Relax on calm waters.' },
  { name: 'Deep Diver', description: 'Explore the deep seas.' },
];

const BoatList = () => {
  return (
    <div>
      {boats.map((boat, index) => (
        <BoatCard key={index} name={boat.name} description={boat.description} />
      ))}
    </div>
  );
};

export default BoatList;
