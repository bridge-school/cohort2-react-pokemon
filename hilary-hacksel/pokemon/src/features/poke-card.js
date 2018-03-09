import React from 'react';
import { Header } from '../components/header';

export const PokeCard = ({ name, imageUrl }) => {
  return (
    <div>
      <Header>{name}</Header>
      <img src={imageUrl} />
    </div>
  );
};
