import {
  MainContainer,
  CardContainer,
  ImageContainer,
  Image,
  NameContainer,
  DescriptionContainer,
  LearnMoreButton,
  ButtonSvg,
  Svg,
  Brend,
  // Model,
  Prise,
  DescriptionText,
  DescriptionItem,
  MainContainerList,
} from './CatalogList.styled';
import Icon from '../../images/icons.svg';
import { selectCars } from '../../redux/Selectors';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCars } from '../../redux/Operations';

const CatalogList = () => {
  const [page, setPage] = useState(1);

  const cars = useSelector(selectCars);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars(page));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const defCar = require('../../images/defaultCar.png');
  return (
    <MainContainer>
      <MainContainerList>
        {cars.map(car => (
          <li key={car.id}>
            <CardContainer>
              <ImageContainer>
                {car.img ? (
                  <Image src={car.img} alt="rent car" />
                ) : (
                  <Image src={defCar} alt="rent car" />
                )}

                <ButtonSvg>
                  <Svg>
                    <use href={Icon + '#like'} />
                  </Svg>
                </ButtonSvg>
              </ImageContainer>
              <NameContainer>
                <Brend>
                  {car.make}, {car.year}
                </Brend>

                <Prise>{car.rentalPrice}</Prise>
              </NameContainer>
              <DescriptionContainer>
                <DescriptionItem>
                  <DescriptionText>{car.address.split(',')[1]}</DescriptionText>
                </DescriptionItem>
                <DescriptionItem>
                  <DescriptionText>{car.address.split(',')[2]}</DescriptionText>
                </DescriptionItem>
                <DescriptionItem>
                  <DescriptionText>{car.rentalCompany}</DescriptionText>
                </DescriptionItem>
                <DescriptionItem>
                  <DescriptionText>{car.type}</DescriptionText>
                </DescriptionItem>
                <DescriptionItem>
                  <DescriptionText>{car.model}</DescriptionText>
                </DescriptionItem>
                <DescriptionItem>
                  <DescriptionText>{car.id}</DescriptionText>
                </DescriptionItem>
                <DescriptionItem>
                  <DescriptionText>{car.accessories[0]}</DescriptionText>
                </DescriptionItem>
              </DescriptionContainer>
              <LearnMoreButton>Learn more</LearnMoreButton>
            </CardContainer>
          </li>
        ))}
      </MainContainerList>
      <div>
        <button onClick={handleLoadMore}>Load more</button>
      </div>
    </MainContainer>
  );
};

export default CatalogList;
