import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 1184px;
  margin-left: auto;
  outline: 1px solid red;
  margin-right: auto;
`;
export const MainContainerList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const CardContainer = styled.div`
  width: 274px;
  height: 426px;
  //   display: flex;
  outline: 1px solid red;
  position: relative;
  margin-bottom: 50px;
`;
export const ImageContainer = styled.div`
  width: 274px;
  height: 268px;
  margin-bottom: 14px;
  outline: 1px solid red;
`;
export const Image = styled.img`
  width: 401px;
  height: 268px;
  object-fit: cover;
  //   flex-shrink: 0;
`;
export const ButtonSvg = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  background: inherit;
`;
export const Svg = styled.svg`
  width: 18px;
  height: 18px;

  fill: #3470ff;
  stroke: #3470ff;
`;
export const NameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  outline: 1px solid red;
`;

export const Brend = styled.h1`
  color: #121417;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;
export const Model = styled.span`
  color: #3470ff;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;
export const Prise = styled(Brend)`
`;
export const DescriptionContainer = styled.ul`
  display: flex;
  width: 270px;
  flex-wrap: wrap;

  gap: 4px;
`;
export const DescriptionItem = styled.li`
  display: flex;
  &:not(:last-child) {
    &:after {
      content: '|';
      margin-right: 6px;
    }
  }
`;
export const DescriptionText = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  margin-right: 6px;
`;

export const LearnMoreButton = styled.button`
  width: 274px;
  height: 44px;
  color: #fff;
  border-radius: 12px;
  background: #3470ff;
  position: absolute;
  bottom: 0;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  &:hover {
    background: #0b44cd;
  }
`;
