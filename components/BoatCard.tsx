import React from 'react';

interface BoatCardProps {
  name: string;
  description: string;
}

const BoatCard: React.FC<BoatCardProps> = ({ name, description }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default BoatCard;
