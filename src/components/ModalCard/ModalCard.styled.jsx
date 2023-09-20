import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding: 40px;
  box-sizing: border-box;
`;
export const ImageContainer = styled.div`
  margin-bottom: 14px;
`;
export const Image = styled.img`
  width: 461px;
  height: 248px;
  border-radius: 14px;

  object-fit: cover;
`;
export const ButtonSvg = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: inherit;
`;
export const Svg = styled.svg`
  width: 24px;
  height: 24px;
  stroke: #121417;
`;
export const NameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Brend = styled.h1`
  color: #121417;
  font-weight: 500;
  line-height: 24px;
  font-size: 18px;
`;
export const Model = styled.span`
  color: #3470ff;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
`;
export const Prise = styled(Brend)``;
export const DescriptionContainer = styled.ul`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin-bottom: 10px;

  //   gap: 4px;
`;
export const DescriptionItem = styled.li`
  display: flex;
  margin-bottom: 4px;

  &:not(:last-child) {
    &:after {
      content: '|';
      margin-right: 5px;
    }
  }
`;
export const DescriptionText = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  margin-right: 5px;
`;
export const DescriptionCarContainer = styled.div`
  margin-bottom: 24px;
`;
export const DescriptionCar = styled.p`
  color: #121417;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;
export const AccessoriesContainer = styled.div`
  margin-bottom: 24px;
`;
export const AccessoriesTitle = styled.h2`
  color: #121417;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 8px;
`;
export const Accessorieslist = styled.ul`
  height: 40px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 4px;
    background-color: #b8b8b8;
    border-radius: 12px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #828583;
    border-radius: 12px;
  }
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;
export const RentalItem = styled.li`
  display: flex;
  margin-bottom: 8px;
  padding: 7px 14px;
  border-radius: 35px;
  background: #f9f9f9;
  margin-right: 8px;
`;
export const RentalDeck = styled.p`
  color: #363535;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`;
export const RentalDeckSpan = styled.span`
  color: #3470ff;
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.24px;
`;
export const RentalButton = styled.button`
  width: 168px;
  height: 44px;
  color: #fff;
  border-radius: 12px;
  background: #3470ff;

  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  &:hover {
    background: #0b44cd;
  }
`;
