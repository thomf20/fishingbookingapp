import React from 'react';

type BoatCardProps = {
  name: string;
  description: string;
};

const BoatCard = ({ name, description }: BoatCardProps) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default BoatCard;
