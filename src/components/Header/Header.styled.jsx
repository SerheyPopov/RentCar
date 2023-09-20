import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 1184px;
  margin-left: auto;
  margin-right: auto;
  height: 50px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
`;
export const MainList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
  height: 100%;
  align-items: center;
`;
export const Button = styled.button`
  border-radius: 12px;
  background: #3470ff;
  width: 80px;
  height: 40px;
  color: #fff;
  font-family: Manrope;
  &:hover {
    background: #0b44cd;
  }
`;
