import {
  CardContainer,
  ImageContainer,
  Image,
  NameContainer,
  DescriptionContainer,
  RentalButton,
  ButtonSvg,
  Svg,
  Brend,
  Model,
  DescriptionText,
  DescriptionItem,
  DescriptionCarContainer,
  DescriptionCar,
  AccessoriesTitle,
  AccessoriesContainer,
  RentalItem,
  RentalDeck,
  RentalDeckSpan,
  Accessorieslist,
} from './ModalCard.styled';
import Icon from '../../images/icons.svg';

const ModalCard = ({ car, onClose }) => {
  const defCar = require('../../images/defaultCar.png');
  return (
    <CardContainer>
      <ImageContainer>
        {car.img ? (
          <Image src={car.img} alt="rent car" />
        ) : (
          <Image src={defCar} alt="rent car" />
        )}

        <ButtonSvg onClick={onClose}>
          <Svg>
            <use href={Icon + '#close'} />
          </Svg>
        </ButtonSvg>
      </ImageContainer>
      <NameContainer>
        <Brend>
          {car.make} <Model>{car.model}</Model>, {car.year}
        </Brend>
      </NameContainer>
      <DescriptionContainer>
        <DescriptionItem>
          <DescriptionText>{car.address.split(',')[1]}</DescriptionText>
        </DescriptionItem>
        <DescriptionItem>
          <DescriptionText>{car.address.split(',')[2]}</DescriptionText>
        </DescriptionItem>
        <DescriptionItem>
          <DescriptionText>Id: {car.id}</DescriptionText>
        </DescriptionItem>
        <DescriptionItem>
          <DescriptionText>Year: {car.year}</DescriptionText>
        </DescriptionItem>
        <DescriptionItem>
          <DescriptionText>Type: {car.type}</DescriptionText>
        </DescriptionItem>
        <DescriptionItem>
          <DescriptionText>
            Fuel Consumption: {car.fuelConsumption}
          </DescriptionText>
        </DescriptionItem>
        <DescriptionItem>
          <DescriptionText>Engine Size: {car.engineSize}</DescriptionText>
        </DescriptionItem>
      </DescriptionContainer>
      <DescriptionCarContainer>
        <DescriptionCar>{car.description}</DescriptionCar>
      </DescriptionCarContainer>
      <AccessoriesContainer>
        <AccessoriesTitle>Accessories and functionalities:</AccessoriesTitle>
        <Accessorieslist>
          {car.accessories.concat(car.functionalities).map(elem => (
            <DescriptionItem key={elem}>
              <DescriptionText>{elem}</DescriptionText>
            </DescriptionItem>
          ))}
        </Accessorieslist>
      </AccessoriesContainer>
      <AccessoriesContainer>
        <AccessoriesTitle>Rental Conditions: </AccessoriesTitle>
        <DescriptionContainer>
          {car.rentalConditions.split(/\n/).map(elem => (
            <RentalItem key={elem}>
              <RentalDeck>{elem}</RentalDeck>
            </RentalItem>
          ))}
          <RentalItem>
            <RentalDeck>
              Mileage:
              <RentalDeckSpan>
                {car.mileage.toLocaleString('en-IN')}
              </RentalDeckSpan>
            </RentalDeck>
          </RentalItem>
          <RentalItem>
            <RentalDeck>
              Price: <RentalDeckSpan>{car.rentalPrice}</RentalDeckSpan>
            </RentalDeck>
          </RentalItem>
        </DescriptionContainer>
      </AccessoriesContainer>
      <a href="tel:+380730000000">
        <RentalButton>Rental car</RentalButton>
      </a>
    </CardContainer>
  );
};

export default ModalCard;
