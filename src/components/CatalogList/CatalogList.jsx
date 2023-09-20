import {
  MainContainer,
  LoadMorecontainer,
  LoadMoreButton,
  MainContainerList,
} from './CatalogList.styled';
import { useSelector } from 'react-redux';
import { useState } from 'react';
// import { fetchCars } from '../../redux/Operations';
import CarCard from '../CarCard/CarCard';
import SearchBar from '../SearchBar/SearchBar';
// import { favoritesCars } from '../../redux/Selectors';
import { selectCars } from '../../redux/Selectors';

const CatalogList = prop => {
  // const [page, setPage] = useState(1);
  // const [like, setLike] = useState(false);
  const [searchParam, setSearchParam] = useState({});
  // const [filterCars, setFilterCars]= useState([])
  // const favorite = useSelector(favoritesCars);
  const cars = useSelector(selectCars);
  // const dispatch = useDispatch();

  //   const find = () => {
  //   dispatch(fetchCars(page));
  // }

  // useEffect(() => {
  //   setFilterCars(cars);
  //   if (searchParam.name !== '') {
  //    return setFilterCars(cars.filter(car => car.make === searchParam.name));
  //   }
  //   if (searchParam.price !== '') {
  //    return setFilterCars(
  //      cars.filter(car => car.rentalPrice <= searchParam.price)
  //    );
  //   }
  //   if (searchParam.from !== '') {
  //     return setFilterCars(
  //       cars.filter(
  //         car =>
  //           (car.mileage >= searchParam.from) & (car.mileage <= searchParam.to)
  //       )
  //     );
  //   }
  // }, [
  //   cars,
  //   searchParam.from,
  //   searchParam.to,
  //   searchParam.price,
  //   searchParam.name,
  // ]);



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

  return (
    <MainContainer>
      <SearchBar search={handleSubmit} />
      <MainContainerList>
        {searchCar().map(car => (
          <li key={car.id}>
            <CarCard car={car} />
          </li>
        ))}
      </MainContainerList>
      <LoadMorecontainer>
        <LoadMoreButton type="button" onClick={prop.click}>
          Load more
        </LoadMoreButton>
        <button onClick={prop.find}>find</button>
      </LoadMorecontainer>
    </MainContainer>
  );
};

export default CatalogList;
