import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Icon from '../../images/icons.svg';
import {
  CardContainer,
  ImageContainer,
  Image,
  NameContainer,
  DescriptionContainer,
  LearnMoreButton,
  ButtonSvg,
  Svg,
  Brend,
  Prise,
  DescriptionText,
  DescriptionItem,
} from './CarCard.styled';
import Modal from '../Modal/Modal';
import { favoriteCars, deleteFavorite } from '../../redux/FavoriteSlice';

const CarCart = prop => {
  const [like, setLike] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const toggleModal = e => {
    setShowModal(!showModal);
  };

  const toggleLike = e => {
    setLike(!like);
    if (prop.like || like) {
      return dispatch(deleteFavorite(e.currentTarget.name));
    }

    dispatch(favoriteCars(prop.car));
  };

  const defCar = require('../../images/defaultCar.png');
  return (
    <CardContainer>
      <ImageContainer>
        {prop.car.img ? (
          <Image src={prop.car.img} alt="rent car" />
        ) : (
          <Image src={defCar} alt="rent car" />
        )}

        <ButtonSvg name={prop.car.id} onClick={toggleLike}>
          <Svg
            $stroke={prop.like || like ? '#3470FF' : '#FFFFFFCC'}
            $fill={prop.like || like ? '#3470FF' : 'none'}
          >
            <use href={Icon + '#like'} />
          </Svg>
        </ButtonSvg>
      </ImageContainer>
      <NameContainer>
        <Brend>
          {prop.car.make}, {prop.car.year}
        </Brend>

        <Prise>{prop.car.rentalPrice}</Prise>
      </NameContainer>
      <DescriptionContainer>
        <DescriptionItem>
          <DescriptionText>{prop.car.address.split(',')[1]}</DescriptionText>
        </DescriptionItem>
        <DescriptionItem>
          <DescriptionText>{prop.car.address.split(',')[2]}</DescriptionText>
        </DescriptionItem>
        <DescriptionItem>
          <DescriptionText>{prop.car.rentalCompany}</DescriptionText>
        </DescriptionItem>
        <DescriptionItem>
          <DescriptionText>{prop.car.type}</DescriptionText>
        </DescriptionItem>
        <DescriptionItem>
          <DescriptionText>{prop.car.model}</DescriptionText>
        </DescriptionItem>
        <DescriptionItem>
          <DescriptionText>{prop.car.id}</DescriptionText>
        </DescriptionItem>
        <DescriptionItem>
          <DescriptionText>{prop.car.accessories[0]}</DescriptionText>
        </DescriptionItem>
      </DescriptionContainer>
      <LearnMoreButton onClick={toggleModal}>Learn more</LearnMoreButton>
      {showModal && <Modal onClose={toggleModal} car={prop.car} />}
    </CardContainer>
  );
};

export default CarCart;
