
import { MainContainer ,CarsList } from './FavoriteList.styled';

import CarCart from '../CarCard/CarCard';
import { favoritesCars } from '../../redux/Selectors';
import {  useSelector } from 'react-redux';
// import { useState } from 'react';

const FavoriteList = () => {

    const favorite = useSelector(favoritesCars);

  return (
    <MainContainer>
      <CarsList>
        {favorite.map(car => (
          <li key={car.id}>
            <CarCart car={car} like={true}  />
          </li>
        ))}
      </CarsList>
    </MainContainer>
  );
};
export default FavoriteList;
