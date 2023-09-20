import { useSelector } from 'react-redux';
import { useState } from 'react';

import {
  MainContainer,
  LoadMorecontainer,
  LoadMoreButton,
  MainContainerList,
} from './CatalogList.styled';
import CarCard from '../CarCard/CarCard';
import SearchBar from '../SearchBar/SearchBar';
import { selectCars } from '../../redux/Selectors';

const CatalogList = () => {
  const [page, setPage] = useState(8);
  const [searchParam, setSearchParam] = useState({});

  const cars = useSelector(selectCars);

  const handleSubmit = (values, { resetForm }) => {
    setSearchParam(values);
    resetForm();
  };

  const searchCar = () => {
    if (searchParam.name !== '') {
      return cars.filter(car => car.make === searchParam.name);
    }
    if (searchParam.price !== '') {
      return cars.filter(car => car.rentalPrice <= searchParam.price);
    }
    if (searchParam.from !== '') {
      return cars.filter(
        car =>
          (car.mileage >= searchParam.from) & (car.mileage <= searchParam.to)
      );
    }
    return cars;
  };

  const src = cars;
  const result = [];
  const count = page;
  for (let s = 0, e = count; s < src.length; s += count, e += count)
    result.push(src.slice(s, e));

  const hendelCount = () => {
    setPage(page + 8);
  };

  const findCar = searchCar();
  return (
    <MainContainer>
      <SearchBar search={handleSubmit} />
      <MainContainerList>
        {findCar.length !== 0
          ? findCar.map(car => (
              <li key={car.id}>
                <CarCard car={car} />
              </li>
            ))
          : result[0].map(car => (
              <li key={car.id}>
                <CarCard car={car} />
              </li>
            ))}
      </MainContainerList>
      <LoadMorecontainer>
        <LoadMoreButton type="button" onClick={hendelCount}>
          Load more
        </LoadMoreButton>
      </LoadMorecontainer>
    </MainContainer>
  );
};

export default CatalogList;
